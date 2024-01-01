import { Box, HStack, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { RxDashboard } from "react-icons/rx";
import { TbArrowsExchange2 } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";

const Sidenav = () => {
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashbord",
      link: "/",
    },

    {
      icon: TbArrowsExchange2,
      text: "Transactions",
      link: "/transactions",
    },
  ];
  return (
    <Stack 
    bg="white"
    justifyContent="space-between"  
    w={{
      base: "full",
      lg: "16rem",
    }}
    h="100vh"
    boxShadow={{
      base: "none",
      lg: "lg",
    }}
   
    >
    <box>
        <Heading textAlign="center" fontSize="20px" pt="3.5rem" as="h1">
        @DOSOMECODING
      </Heading>
      <Box mt="6" mx="3">
        {navLinks.map((nav) => (
          <HStack borderRadius="10px" mx="3" py="3" px="4"  key={nav.text}
            _hover={{
              bg: "#F3F3F7",
              color: "#171717",
            }}
            color="#797E82" >
            <Icon as={nav.icon} />
            <Text fontSize="14px" fontWeight="medium" >{nav.text}</Text>
          </HStack>
        ))}
      </Box>
        </box>



      
      <Box mt="6" mx="3" mb="6">
      <HStack borderRadius="10px" mx="3" py="3" px="4"  
            _hover={{
              bg: "#F3F3F7",
              color: "#171717",
            }}
            color="#797E82"
            
          >
            <Icon as={BiSupport } />
            <Text fontSize="14px" fontWeight="medium" >Support</Text>
          </HStack>
      </Box>
    </Stack>
  );
};

export default Sidenav;
