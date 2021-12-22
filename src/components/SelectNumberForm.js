import React, { useState } from "react";
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Select,
} from "@chakra-ui/react";

const SelectNumberForm = () => {
    const INITIAL_FORM_STATE = {
        number: 1,
    };
    const [formData, setFormData] = useState(INITIAL_FORM_STATE);

    const handleFormSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        setFormData(e.target.value);
        console.log(e.target.value);
    };

    return (
        <FormControl as="fieldset">
            <FormLabel as="legend">Select number of Pokemon</FormLabel>
            <Select
                placeholder="Select option"
                onChange={handleChange}
            ></Select>
            <FormHelperText>Select only if you're a fan.</FormHelperText>
        </FormControl>
    );
};

export default SelectNumberForm;
