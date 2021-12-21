import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <Menu>
            <MenuButton
                as={Button}
                rightIcon={<TriangleDownIcon />}
                my={4}
                mx={4}
                transition="all 0.5s"
            >
                Navigate
            </MenuButton>
            <MenuList>
                <MenuItem onClick={() => navigate("/")}>Home</MenuItem>
                <MenuItem onClick={() => navigate("/pokemon")}>
                    Pokemon
                </MenuItem>
                <MenuItem onClick={() => navigate("/items")}>Items</MenuItem>
                <MenuItem onClick={() => navigate("/berries")}>
                    Berries
                </MenuItem>
                <MenuItem onClick={() => navigate("/evolution")}>
                    Evolution
                </MenuItem>
                <MenuItem onClick={() => navigate("/moves")}>Moves</MenuItem>
                <MenuItem onClick={() => navigate("/machines")}>
                    Machines
                </MenuItem>
            </MenuList>
        </Menu>
    );
};

export default Navbar;
