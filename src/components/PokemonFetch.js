import React, { useState, useEffect } from "react";
import { Box, Flex, Spinner, Image, VStack, Text } from "@chakra-ui/react";
import PokemonList from "./PokemonList";
import axios from "axios";
import pokemon from "../assets/pokemon.png";
import FilterForm from "./FilterForm";
const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=100";

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
                    // const nextItemsLink = res.data.next;
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
                        // console.log(res.data);
                    })
                    .catch((err) => {
                        if (err) {
                            alert(err.response);
                        }
                    });
            }
            // localStorage.setItem("results", JSON.stringify(data));
            setPokemonData(data);
            setIsLoading(false);
            // console.log(data);
        };
        fetch();
    }, []);

    const isThereData = () => {
        if (isLoading) {
            return (
                <Flex justify="center" alignContent="column">
                    <VStack>
                        <Spinner
                            size="xl"
                            color="yellow.500"
                            emptyColor="red.500"
                            thickness="8px"
                        />
                        <Text fontSize="4xl">LOADING... </Text>
                    </VStack>
                </Flex>
            );
        } else {
            return (
                <VStack>
                    <Image src={pokemon} mb={14} />
                    <Box>
                        {pokemonData.map((pokemon) => (
                            <PokemonList
                                key={pokemon.name}
                                name={pokemon.name}
                                weight={pokemon.weight}
                                xp={pokemon.base_experience}
                                dexNumber={pokemon.id}
                                moves={pokemon.moves}
                                picture={
                                    pokemon.sprites.other.dream_world
                                        .front_default
                                }
                                stats={pokemon.stats}
                                primaryType={pokemon.types[0].type.name}
                            />
                        ))}
                    </Box>
                </VStack>
            );
        }
    };

    return isThereData();
};

export default PokemonFetch;
