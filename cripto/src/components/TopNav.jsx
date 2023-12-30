import { Heading, Menu, MenuButton, MenuList, MenuItem, HStack, Box, Icon } from "@chakra-ui/react";
import { HiUserCircle } from "react-icons/hi";
import { FaBars } from "react-icons/fa6";

const TopNav = ({ title, onOpen }) => {
  return (
    <Box px="4" bg="white">
         <HStack maxW="70rem"  h='16' justify="space-between"  mx="auto">
          <Icon as={FaBars } onClick={onOpen} display={{
            base: "block",
            lg: "none",
          }}/>
        <Heading fontWeight="medium" fontSize="28px">{title}</Heading>

        <Menu>
          <MenuButton>
            <Icon as={HiUserCircle} fontSize="40px"/>
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
            <MenuItem>Contact</MenuItem>
          </MenuList>
        </Menu>

    </HStack>
    </Box>
  );
};

export default TopNav;
