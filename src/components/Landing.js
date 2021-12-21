import React from "react";
import { Flex, Center, Button, Image, VStack, Spacer } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import titleText from "../assets/titletext_alternate.png";
// import pokeBall from "../assests/pokeball.png";

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
