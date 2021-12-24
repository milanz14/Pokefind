import React from "react";
import { Button, Image, VStack, Spacer } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import titleText from "../assets/titletext_alternate.png";

const Landing = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/pokemon");
    };

    return (
        <VStack>
            <Image src={titleText} mb={15}></Image>
            <Spacer></Spacer>
            <Image></Image>
            <Button onClick={handleClick} colorScheme="yellow">
                Enter
            </Button>
        </VStack>
    );
};

export default Landing;
