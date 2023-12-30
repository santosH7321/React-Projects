import { HStack, Icon, Stack, Text } from '@chakra-ui/react'
import { AiOutlineInfoCircle } from "react-icons/ai";



const portfolioSection = () => {
  return (
    <HStack bg="white" borderRadius="xl" p="6">
        <Stack>
            <HStack color="#535066">
                <Text fontSize="14px">Total Portfolio Value</Text>
                <Icon as={AiOutlineInfoCircle} />
            </HStack>
        </Stack>
    </HStack>
  )
}

export default portfolioSection