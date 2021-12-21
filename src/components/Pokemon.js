import React, { useState } from "react";
import { ListItem } from "@chakra-ui/react";

const Pokemon = (props) => {
    const { name, url } = props;
    const [pokemonID, setPokemonId] = useState(null);

    const handleURL = () => {
        const splitUp = url.split("/");
        // console.log(splitUp[6]);
        setPokemonId(splitUp[6]);
    };

    return (
        <ListItem onClick={handleURL}>
            <span>
                {name}: {pokemonID}
            </span>
        </ListItem>
    );
};

export default Pokemon;
