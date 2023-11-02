import React from "react";
import {
  useDisclosure,
  Box,
  Image,
  Flex,
  Button,
  VStack,
} from "@chakra-ui/react";
import PokeModal from "./PokeModal";

const PokemonList = (props) => {
  const { name, weight, xp, moves, picture, stats, dexNumber, primaryType } =
    props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      _hover={{
        transform: "scale(0.99)",
        transition: "all 0.2s",
      }}
      boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
      borderRadius="16px">
      <Box width="400px" height="300px" display="flex" align="center">
        <VStack justify="center" display="flex" mb={4} mx={20}>
          <Image src={picture} boxSize="200px" mx={8} mb={2} />
          <Button
            onClick={onOpen}
            ml={8}
            my={4}
            mb={2}
            _hover={{ background: "black", color: "white" }}>
            {name.toUpperCase()}
          </Button>
          {/* <Link href={`pokemon/${name}`}>More Info</Link> */}
          <PokeModal
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            name={name}
            weight={weight}
            xp={xp}
            moves={moves}
            picture={picture}
            stats={stats}
            dexNumber={dexNumber}
            primaryType={primaryType}
          />
        </VStack>
      </Box>
    </Flex>
  );
};

export default PokemonList;
