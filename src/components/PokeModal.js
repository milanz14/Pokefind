import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalCloseButton,
  ModalBody,
  Button,
  Text,
  Image,
  Box,
} from "@chakra-ui/react";
// import PokeMoves from "./PokeMoves";

const PokeModal = (props) => {
  const { isOpen, onClose, name, weight, xp, picture, dexNumber, primaryType } =
    props;
  // const [pokemonMoves, setPokemonMoves] = useState([]);
  // const [movesClick, setMovesClicked] = useState(false);
  const size = "lg";

  // const getPokemonsMoves = (array) => {
  //     for (let move of moves) {
  //         setPokemonMoves((currMoves) => [...currMoves, move]);
  //         console.log(move);
  //     }
  //     setMovesClicked(true);
  // };

  return (
    <>
      <Modal isOpen={isOpen} size={size} isCentered motionPreset="slideInRight">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{name.toUpperCase()}</ModalHeader>
          <ModalCloseButton onClick={onClose} />
          <ModalBody>
            <Box boxSize="150px" pt={10}>
              <Image src={picture} />
            </Box>
            <Text fontSize="4xl" mt="150px">
              Pokedex: #{dexNumber}
            </Text>
            <Text fontSize="2xl">XP: {xp}</Text>
            <Text fontSize="2xl">Weight: {weight}</Text>
            <Text fontSize="2xl">
              Primary Type:{" "}
              {primaryType[0].toUpperCase() + primaryType.substring(1)}
            </Text>
            {/* <Button onClick={() => getPokemonsMoves(moves)}>
                            Show Moves
                        </Button> */}
            {/* {movesClick && (
                            <>
                                <ul>
                                    {pokemonMoves.map((pokeMove) => {
                                        <li>{pokeMove.name}</li>;
                                    })}
                                </ul>
                            </>
                        )} */}
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
