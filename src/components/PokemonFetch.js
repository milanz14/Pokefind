import React, { useState, useEffect } from "react";
import { Box, Flex, Spinner, Image, VStack, HStack } from "@chakra-ui/react";
import PokemonList from "./PokemonList";
import axios from "axios";
import pokemon from "../assets/pokemon.png";
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/?limit=151";

const PokemonFetch = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetch = async () => {
            let data = [];
            let urls = await axios
                .get(BASE_URL)
                .then((res) => {
                    const pokeInfo = res.data.results;
                    // console.log(pokeInfo[0]);
                    return pokeInfo.map((result) => {
                        return result.url;
                    });
                })
                .catch((err) => {
                    if (err.response) {
                        alert("Pokemon not found... are you sure it exists?");
                        setPokemonData([]);
                        setIsLoading(false);
                    }
                });

            for (let url of urls) {
                await axios
                    .get(url)
                    .then((res) => {
                        // console.log(res.data[0]);
                        data.push(res.data);
                        console.log(res.data);
                    })
                    .catch((err) => {
                        if (err) {
                            alert(err.response);
                        }
                    });
            }
            setPokemonData(data);
            setIsLoading(false);
        };
        fetch();
    }, []);

    const isThereData = () => {
        if (isLoading) {
            return (
                <Flex justify="center">
                    <Spinner
                        size="xl"
                        color="yellow.500"
                        emptyColor="red.500"
                        thickness="8px"
                    />
                </Flex>
            );
        } else {
            return (
                <Flex justify="center">
                    <VStack>
                        <Image src={pokemon} />
                        <Box alignContent="center">
                            {pokemonData.map((pokemon) => (
                                <PokemonList
                                    key={pokemon.name}
                                    name={pokemon.name}
                                    weight={pokemon.weight}
                                    xp={pokemon.base_experience}
                                    dexNumber={pokemon.id}
                                    moves={pokemon.moves}
                                    picture={pokemon.sprites.front_default}
                                    stats={pokemon.stats}
                                />
                            ))}
                        </Box>
                    </VStack>
                </Flex>
            );
        }
    };

    return isThereData();
};

export default PokemonFetch;
