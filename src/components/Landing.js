import React from "react";
import { Button, VStack, Spacer } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import Header from "./Header";
import Section from "./Section";
import DeveloperAbout from "./DeveloperAbout";

const Landing = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/pokemon");
    };

    return (
        <VStack>
            <Header />
            <Spacer></Spacer>
            <Button onClick={handleClick} colorScheme="yellow">
                Enter
            </Button>
            <Section />
            <Spacer></Spacer>
            <DeveloperAbout />
        </VStack>
    );
};

export default Landing;
