import React, { useState, useEffect } from "react";
import {
  Flex,
  Spinner,
  Image,
  VStack,
  Stack,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import PokemonList from "./PokemonList";
import axios from "axios";
import pokemon from "../assets/pokemon.png";
// const BASE_URL = "https://pokeapi.co/api/v2/pokemon?limit=30";

const PokemonFetch = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchingMore, setFetchingMore] = useState(false);
  const [isNotSmallScreen] = useMediaQuery("(min-width:800px)");
  const [baseURL, setBaseURL] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=8"
  );
  const [next, setNext] = useState("");

  useEffect(() => {
    const fetch = async () => {
      let data = [];
      let urls = await axios
        .get(baseURL)
        .then((res) => {
          setNext(res.data.next);
          const pokeInfo = res.data.results;
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
            data.push(res.data);
          })
          .catch((err) => {
            if (err) {
              alert(err.response);
            }
          });
      }
      setPokemonData((currData) => [...currData, ...data]);
      setIsLoading(false);
    };
    fetch();
  }, [baseURL]);

  const handleLoadMore = () => {
    setFetchingMore(true);
    setBaseURL(next);
    if (!isLoading) {
      setFetchingMore(false);
    }
  };

  const isThereData = () => {
    if (isLoading) {
      return (
        <Flex justify="center" alignContent="column">
          <VStack>
            <Image src={pokemon} mb={5} />
            <Spinner
              size="xl"
              color="yellow.400"
              emptyColor="blue.500"
              thickness="8px"
            />
          </VStack>
        </Flex>
      );
    } else {
      return (
        <VStack p={5}>
          <Image src={pokemon} mb={5} />
          <Stack
            direction={isNotSmallScreen ? "row" : "column"}
            maxWidth="100vw"
            wrap="wrap"
            justifyContent="center">
            {pokemonData.map((pokemon) => (
              <PokemonList
                key={pokemon.name}
                name={pokemon.name}
                weight={pokemon.weight}
                xp={pokemon.base_experience}
                dexNumber={pokemon.id}
                moves={pokemon.moves}
                picture={pokemon.sprites.other.dream_world.front_default}
                stats={pokemon.stats}
                primaryType={pokemon.types[0].type.name}
              />
            ))}
          </Stack>
          <Button onClick={handleLoadMore} mt={5} mb={5} colorScheme="yellow">
            Load More...
            {fetchingMore && (
              <Spinner
                size="xl"
                color="yellow.400"
                emptyColor="blue.500"
                thickness="8px"
              />
            )}
          </Button>
        </VStack>
      );
    }
  };

  return isThereData();
};

export default PokemonFetch;
