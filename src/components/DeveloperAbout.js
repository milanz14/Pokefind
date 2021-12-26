import React from "react";
import {
    VStack,
    Button,
    Box,
    Text,
    Image,
    Heading,
    useMediaQuery,
} from "@chakra-ui/react";
import profile from "../assets/profile.JPG";

const DeveloperAbout = () => {
    const [isNotSmallScreen] = useMediaQuery("(min-width:800px)");

    return (
        <Box
            boxSize={isNotSmallScreen ? "500px" : "250px"}
            py={isNotSmallScreen ? 16 : 250}
        >
            <Heading align="center">THE DEV</Heading>
            <Box justifyItems="center">
                <Text fontSize={isNotSmallScreen ? "2xl" : "lg"} align="center">
                    The dev is a full stack web developer with over a decade of
                    experience in sales leadership.
                </Text>
            </Box>
            <VStack py={6}>
                <Image
                    src={profile}
                    objectFit="cover"
                    boxSize="100px"
                    borderRadius="full"
                    mb={6}
                />
                <Button
                    align="center"
                    onClick={() => window.open("https://github.com/milanz14")}
                    colorScheme="yellow"
                >
                    More
                </Button>
            </VStack>
        </Box>
    );
};

export default DeveloperAbout;
