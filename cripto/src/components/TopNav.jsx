import { Heading, Menu, MenuButton, MenuList, MenuItem, HStack, Box, Icon } from "@chakra-ui/react";
import { HiUserCircle } from "react-icons/hi";

const TopNav = () => {
  return (
    <Box>
         <HStack maxW="80rem"  h='16' justify="space-between" px="32" mx="auto">
        <Heading fontWeight="medium" fontSize="28px">Dashbord</Heading>

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
