import React from "react";
import { Box, FormControl, FormLabel, Select } from "@chakra-ui/react";

const TypesSearchForm = (props) => {
    const { getTypeData } = props;

    const handleChange = (e) => {
        getTypeData(e.target.value.toLowerCase());
        // console.log(e.target.value);
    };

    return (
        <FormControl width="500px">
            <FormLabel htmlFor="types">Select Pokemon Type</FormLabel>
            <Select
                id="types"
                placeholder="Type"
                onChange={handleChange}
                defaultValue=""
            >
                <option value="Normal">Normal</option>
                <option value="Fire">Fire</option>
                <option value="Water">Water</option>
                <option value="Grass">Grass</option>
                <option value="Electric">Electric</option>
                <option value="Ice">Ice</option>
                <option value="Fighting">Fighting</option>
                <option value="Poison">Poison</option>
                <option value="Ground">Ground</option>
                <option value="Flying">Flying</option>
                <option value="Psychic">Psychic</option>
                <option value="Bug">Bug</option>
                <option value="Rock">Rock</option>
                <option value="Ghost">Ghost</option>
                <option value="Dark">Dark</option>
                <option value="Dragon">Dragon</option>
                <option value="Steel">Steel</option>
                <option value="Fairy">Fairy</option>
                <option value="Shadow">Shadow</option>
            </Select>
        </FormControl>
    );
};

export default TypesSearchForm;
