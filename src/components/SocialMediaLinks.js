import { HStack, Icon } from "@chakra-ui/react";
import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const SocialMediaLinks = () => {
  return (
    <HStack spacing="24" justifyContent="center">
      <Icon
        aria-label="github"
        boxSize="25"
        as={FaGithub}
        isRound="true"
        onClick={() => window.open("https://github.com/milanz14")}
        _hover={{
          cursor: "pointer",
          transform: "scale(0.95)",
          color: "yellow.400",
        }}></Icon>
      <Icon
        aria-label="github"
        boxSize="25"
        as={FaTwitter}
        isRound="true"
        onClick={() => window.open("https://twitter.com/selftaughtc0der")}
        _hover={{
          cursor: "pointer",
          transform: "scale(0.95)",
          color: "yellow.400",
        }}></Icon>
      <Icon
        aria-label="github"
        boxSize="25"
        as={FaLinkedin}
        isRound="true"
        onClick={() => window.open("https://www.linkedin.com/in/milanzagorac/")}
        _hover={{
          cursor: "pointer",
          transform: "scale(0.95)",
          color: "yellow.400",
        }}></Icon>
    </HStack>
  );
};

export default SocialMediaLinks;
