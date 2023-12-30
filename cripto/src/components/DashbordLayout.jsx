import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react"
import Sidenav from "./Sidenav"
import TopNav from "./TopNav"
import SideDrawer from "./SideDrawer";


const DashbordLayout = ({ title, children }) => {
    const { isOpen, onClose, onOpen} = useDisclosure();
  return (
    <Flex>
      <Sidenav />
        <SideDrawer isOpen={isOpen} onClose={onClose} />
      <Box flexGrow={1}>
        <TopNav title={title} />
        <Container maxW="70rem" bg="Green">{children}</Container>
      </Box>
    </Flex>
  );
};

export default DashbordLayout