import React from "react";
import { useDisclosure, Box, Image, Flex } from "@chakra-ui/react";
import PokeModal from "./PokeModal";

const PokemonList = (props) => {
    const { name, weight, xp, moves, picture, stats, dexNumber } = props;
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Flex
            _hover={{
                cursor: "pointer",
                transform: "scale(0.95)",
                transition: "all 0.2s",
            }}
            boxShadow="1px 2px 2px rgba(0,0,0,0.35)"
        >
            <Box alignSelf="center">
                <Image src={picture} justifyContent="center" />
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
                />
            </Box>
        </Flex>
    );
};

export default PokemonList;
