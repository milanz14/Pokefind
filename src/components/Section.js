import React from "react";
import { Text, Box, Image, useMediaQuery, Heading } from "@chakra-ui/react";
import bulbasaur from "../assets/bulbasaur.png";

const Section = () => {
  const [isNotSmallScreen] = useMediaQuery("(min-width:800px)");

  return (
    <Box boxSize={isNotSmallScreen ? "500px" : "250px"} py={16}>
      <Heading align="center">ABOUT</Heading>
      <Text fontSize={isNotSmallScreen ? "2xl" : "lg"} align="center" mb={5}>
        Pokefind is a React-based fetch tool that provides information on all of
        your favourite Pokemon. Sign up today to add all of your favs to your
        Pokedex!
      </Text>
      <Image alignSelf="center" src={bulbasaur} />
      <Text fontSize={isNotSmallScreen ? "2xl" : "lg"} align="center" py={5}>
        How it works: On page load, data will load from the PokeApi and display
        cards on the page. It will load limited data to stay performant. The
        user can load more data via a button click.
      </Text>
    </Box>
  );
};

export default Section;
