import React from "react";
import { Button, VStack, Spacer } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import Header from "./Header";
import Section from "./Section";

const Landing = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/pokemon");
  };

  return (
    <VStack>
      <Header />
      <Spacer />
      <Button onClick={handleClick} colorScheme="yellow">
        Enter
      </Button>
      <Section />
      <Spacer />
    </VStack>
  );
};

export default Landing;
