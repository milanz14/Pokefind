import React, { useContext, useEffect } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
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
  });

  const handleLogoutClick = () => {
    setLoggedIn(false);
  };

  return (
    <Menu isLazy>
      <MenuButton
        as={IconButton}
        icon={<HamburgerIcon />}
        my={2}
        mx={2}
        transition="all 0.5s"></MenuButton>
      <MenuList>
        <MenuItem onClick={() => navigate("/")}>Home</MenuItem>
        <MenuItem onClick={() => navigate("/pokemon")}>Pokemon Search</MenuItem>
        <MenuItem onClick={() => navigate("/pokemon/types")}>
          Type Search
        </MenuItem>
        {loggedIn && (
          <>
            <MenuItem onClick={() => navigate("/pokemon/pokedex")}>
              My Pokedex
            </MenuItem>
            <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
          </>
        )}
        {!loggedIn && (
          <>
            <MenuItem onClick={() => navigate("/login")}>Login</MenuItem>
            <MenuItem onClick={() => navigate("/register")}>Register</MenuItem>
          </>
        )}
      </MenuList>
    </Menu>
  );
};

export default Navbar;
