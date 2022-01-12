import { Flex, Box, Text, Icon, Heading, Link } from "@chakra-ui/react";
import { BsMoonFill } from "react-icons/bs";
import { useColorMode, Button } from "@chakra-ui/react";

function Example() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Icon w="6" h="6" as={BsMoonFill} onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Icon>
    </>
  );
}

const Header = () => {
  return (
    <Flex m="5" justify="center" alignItems="center">
      <Heading as="h1">Todo App</Heading>
      <Flex ml="5">
        <Example />
      </Flex>
    </Flex>
  );
};

export default Header;
