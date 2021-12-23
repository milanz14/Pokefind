import React, { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import TypeSearchForm from "./TypesSearchForm";
import axios from "axios";
const BASE_TYPES_URL = "https://pokeapi.co/api/v2/type";

const TypesFetch = () => {
    const [pokemonType, setPokemonType] = useState("");
    const [filteredByTypeData, setFilteredByTypeData] = useState([]);

    const getTypeData = (val) => {
        setPokemonType(val);
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`${BASE_TYPES_URL}/${pokemonType}`);
            console.log(res.data.pokemon);
        };
        fetchData();
    }, [pokemonType]);

    return (
        <Box>
            <TypeSearchForm getTypeData={getTypeData} />
        </Box>
    );
};

export default TypesFetch;
