import React, { useState, useEffect } from "react";
import { UnorderedList, Flex, Button, Spinner, Text } from "@chakra-ui/react";
import Pokemon from "./Pokemon";
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
                    console.log(res);
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
                    <UnorderedList>
                        {pokemonData.map((pokemon) => (
                            <Pokemon
                                key={pokemon.name}
                                name={pokemon.name}
                                url={pokemon.url}
                            />
                        ))}
                    </UnorderedList>
                </Flex>
            );
        }
    };

    return isThereData();
};

export default PokemonFetch;
