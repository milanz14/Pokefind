import React, { useState, useEffect } from "react";
import { List, Flex, Spinner, Text, VStack } from "@chakra-ui/react";
import PokemonList from "./PokemonList";
import axios from "axios";
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

const PokemonFetch = () => {
    const [pokemonData, setPokemonData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetch = async () => {
            await axios
                .get(BASE_URL)
                .then((res) => {
                    // console.log(res);
                    setPokemonData(res.data.results);
                    setIsLoading(false);
                })
                .catch((err) => {
                    if (err.response) {
                        alert("Pokemon not found... are you sure it exists?");
                    }
                });
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
                    <VStack spacing={3}>
                        <Text fontSize="4xl">Pokemon</Text>
                        <List>
                            {pokemonData.map((pokemon) => (
                                <PokemonList
                                    key={pokemon.name}
                                    name={pokemon.name}
                                    url={pokemon.url}
                                />
                            ))}
                        </List>
                    </VStack>
                </Flex>
            );
        }
    };

    return isThereData();
};

export default PokemonFetch;
