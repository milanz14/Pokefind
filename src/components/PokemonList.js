import React from "react";
import { useDisclosure, VStack, Image, Flex, Button } from "@chakra-ui/react";
import PokeModal from "./PokeModal";

const PokemonList = (props) => {
    const { name, weight, xp, moves, picture, stats, dexNumber } = props;
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Flex
            _hover={{
                transform: "scale(0.95)",
                transition: "all 0.2s",
            }}
            boxShadow="1px 2px 2px rgba(0,0,0,0.35)"
        >
            <VStack alignSelf="center" display="flex" mx={5} mb={4}>
                <Image src={picture} />
                <Button onClick={onOpen} ml={8} my={4} mb={4}>
                    {name.toUpperCase()}
                </Button>
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
            </VStack>
        </Flex>
    );
};

export default PokemonList;
