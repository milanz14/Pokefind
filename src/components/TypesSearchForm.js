import React from "react";
import { FormControl, FormLabel, Select } from "@chakra-ui/react";

const TypesSearchForm = (props) => {
    const { getTypeData } = props;

    const handleChange = (e) => {
        getTypeData(e.target.value);
        // console.log(e.target.value);
    };

    return (
        <FormControl
            width="400px"
            boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"
            p={5}
        >
            <FormLabel htmlFor="types">Select Pokemon Type</FormLabel>
            <Select
                id="types"
                onChange={handleChange}
                size="lg"
                variant="Flushed"
                fontFamily="Raleway"
            >
                <option value="normal">Normal</option>
                <option value="fire">Fire</option>
                <option value="water">Water</option>
                <option value="grass">Grass</option>
                <option value="electric">Electric</option>
                <option value="ice">Ice</option>
                <option value="fighting">Fighting</option>
                <option value="poison">Poison</option>
                <option value="ground">Ground</option>
                <option value="flying">Flying</option>
                <option value="psychic">Psychic</option>
                <option value="bug">Bug</option>
                <option value="rock">Rock</option>
                <option value="ghost">Ghost</option>
                <option value="dark">Dark</option>
                <option value="dragon">Dragon</option>
                <option value="steel">Steel</option>
                <option value="fairy">Fairy</option>
            </Select>
        </FormControl>
    );
};

export default TypesSearchForm;
