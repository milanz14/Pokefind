import React from "react";
import title from "../assets/titletext_alternate.png";
import { Image, Box } from "@chakra-ui/react";

const Header = () => {
    return (
        <Box>
            <Image src={title} mb={18}></Image>
        </Box>
    );
};

export default Header;
