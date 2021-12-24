import React, { useState, useEffect } from "react";
import {
    Box,
    VStack,
    Image,
    Text,
    Flex,
    Spinner,
    Stack,
    useMediaQuery,
} from "@chakra-ui/react";
import TypeSearchForm from "./TypesSearchForm";
import PokemonList from "./PokemonList";
import axios from "axios";
import types from "../assets/types.png";
const BASE_TYPES_URL = "https://pokeapi.co/api/v2/type";

const TypesFetch = () => {
    const [pokemonType, setPokemonType] = useState("normal");
    const [filteredByTypeData, setFilteredByTypeData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hasData, setHasData] = useState(true);
    const [isNotSmallScreen] = useMediaQuery("(min-width:800px)");

    useEffect(() => {
        const fetch = async () => {
            let data = [];
            setIsLoading(true);
            setHasData(false);
            let urls = await axios
                .get(`${BASE_TYPES_URL}/${pokemonType}`)
                .then((res) => {
                    const moreUrls = res.data.pokemon;
                    return moreUrls.map((result) => {
                        return result.pokemon.url;
                    });
                })
                .catch((err) => {
                    if (err.response) {
                        alert("Something went wrong here");
                        setFilteredByTypeData([]);
                        setIsLoading(false);
                    }
                });

            for (let url of urls) {
                await axios
                    .get(url)
                    .then((res) => {
                        data.push(res.data);
                    })
                    .catch((err) => {
                        if (err) {
                            alert(err.response);
                        }
                    });
            }
            setFilteredByTypeData(data);
            setIsLoading(false);
            setHasData(true);
        };
        fetch();
    }, [pokemonType]);

    const getTypeData = (string) => {
        setPokemonType(string);
    };

    return (
        <Box>
            <VStack>
                <Image src={types}></Image>
                {hasData && (
                    <Text fontSize="4xl" mx={2}>
                        Currently showing: {pokemonType.toUpperCase()}-type
                        Pokemon
                    </Text>
                )}
                {isLoading && (
                    <Flex justify="center" alignContent="column">
                        {!hasData && (
                            <VStack>
                                <Spinner
                                    size="xl"
                                    color="yellow.500"
                                    emptyColor="red.500"
                                    thickness="8px"
                                />
                            </VStack>
                        )}
                    </Flex>
                )}
                <TypeSearchForm getTypeData={getTypeData} />
                <Stack
                    direction={isNotSmallScreen ? "row" : "column"}
                    maxWidth="100vw"
                    wrap="wrap"
                    justifyContent="center"
                >
                    {filteredByTypeData.map((pokemon) => (
                        <PokemonList
                            key={pokemon.name}
                            name={pokemon.name}
                            weight={pokemon.weight}
                            xp={pokemon.base_experience}
                            dexNumber={pokemon.id}
                            moves={pokemon.moves}
                            picture={
                                pokemon.sprites.other.dream_world.front_default
                            }
                            stats={pokemon.stats}
                            primaryType={pokemon.types[0].type.name}
                        />
                    ))}
                </Stack>
            </VStack>
        </Box>
    );
};

export default TypesFetch;
