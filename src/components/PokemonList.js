import React, { useState } from "react";
import { ListItem, useDisclosure } from "@chakra-ui/react";
import PokeModal from "./PokeModal";

const PokemonList = (props) => {
    // const navigate = useNavigate();
    const { name, url } = props;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [pokemonID, setPokemonID] = useState(null);
    const [isModalShowing, setIsModalShowing] = useState(false);
    const size = "full";

    const openModal = () => {
        const splitUp = url.split("/");
        // console.log(splitUp[6]);
        setPokemonID(splitUp[6]);
        setIsModalShowing(!isModalShowing);
    };

    return (
        <ListItem
            onClick={openModal}
            _hover={{ cursor: "pointer" }}
            spacing="5"
        >
            {name}
            {isModalShowing && (
                <PokeModal pokemonID={pokemonID} url={url} name={name} />
            )}
        </ListItem>
    );
};

export default PokemonList;
