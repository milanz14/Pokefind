import React, { useContext, useEffect } from "react";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { TriangleDownIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../helpers/LoginContext";

const Navbar = () => {
    const navigate = useNavigate();
    const { loggedIn, setLoggedIn } = useContext(LoginContext);

    useEffect(() => {
        const isLoggedIn = localStorage.getItem("_token");
        if (isLoggedIn) {
            setLoggedIn(true);
        }
    }, [loggedIn]);

    return (
        <Menu>
            <MenuButton
                as={Button}
                rightIcon={<TriangleDownIcon />}
                my={4}
                mx={2}
                transition="all 0.5s"
            >
                Navigate
            </MenuButton>
            <MenuList>
                <MenuItem onClick={() => navigate("/")}>Home</MenuItem>
                <MenuItem onClick={() => navigate("/pokemon")}>
                    Pokemon Search
                </MenuItem>
                <MenuItem onClick={() => navigate("/pokemon/types")}>
                    Type Search
                </MenuItem>
                {loggedIn && (
                    <MenuItem onClick={() => navigate("/logout")}>
                        Logout
                    </MenuItem>
                )}
                {!loggedIn && (
                    <>
                        <MenuItem onClick={() => navigate("/login")}>
                            Login
                        </MenuItem>
                        <MenuItem onClick={() => navigate("/register")}>
                            Register
                        </MenuItem>
                    </>
                )}
            </MenuList>
        </Menu>
    );
};

export default Navbar;
