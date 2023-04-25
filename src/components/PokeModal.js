import { useEffect, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Text,
  Image,
  Box,
  VStack,
  HStack,
} from "@chakra-ui/react";
// import PokeMoves from "./PokeMoves";

const PokeModal = (props) => {
  const {
    isOpen,
    onClose,
    name,
    weight,
    xp,
    picture,
    dexNumber,
    primaryType,
    stats,
  } = props;
  const size = "lg";

  const [pokemonStats, setPokemonStats] = useState(null);

  useEffect(() => {
    formatStats(stats);
  }, [isOpen]);

  const formatStats = (stats) => {
    console.log(stats);
  };

  return (
    <>
      <Modal isOpen={isOpen} size={size} isCentered motionPreset="slideInRight">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{name.toUpperCase()}</ModalHeader>
          <ModalBody>
            <Box boxSize="150px" pt={10}>
              <Image src={picture} />
            </Box>
            <HStack>
              <VStack align="start">
                <Text fontSize="4xl" mt="150px">
                  Pokedex: #{dexNumber}
                </Text>
                <Text fontSize="2xl">XP: {xp}</Text>
                <Text fontSize="2xl">Weight: {weight}</Text>
                <Text fontSize="2xl">
                  Primary Type:{" "}
                  {primaryType[0].toUpperCase() + primaryType.substring(1)}
                </Text>
              </VStack>
              <VStack>
                <Text fontSize="2xl">Test</Text>
              </VStack>
            </HStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PokeModal;
