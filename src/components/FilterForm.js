import React, { useState } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

const FilterForm = (props) => {
    const { filterPokemon } = props;

    const handleChange = (e) => {
        filterPokemon(e.target.value);
    };

    return (
        <FormControl>
            <FormLabel htmlFor="search">Pokemon Name</FormLabel>
            <Input
                id="search"
                placeholder="Search for Pokemon.. "
                type="text"
                onChange={handleChange}
            />
        </FormControl>
    );
};

export default FilterForm;
