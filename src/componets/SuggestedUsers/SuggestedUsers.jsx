import React from "react";
import SuggestedUser from "./SuggestedUser";
import SuggestedHeader from "./SuggestedHeader";
import { VStack, Flex, Box, Text, Link } from "@chakra-ui/react";
const SuggestedUsers = () => {
  return (
    <VStack gap={4} px={6} py={8}>
      <SuggestedHeader />
      <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
        <Text color={"gray.500"} fontSize={12} fontWeight={"bold"}>
          Suggested for you
        </Text>
        <Text
          _hover={{ color: "gray.400" }}
          fontSize={12}
          fontWeight={"bold"}
          cursor={"pointer"}
        >
          See All
        </Text>
      </Flex>
      <SuggestedUser name={"Dan Abramov"} followers={1326} avatar={'https://bit.ly/dan-abramov'}/>
      <SuggestedUser name={"Ryan Florence"} followers={537} avatar={'https://bit.ly/dan-abramov'}/>
      <SuggestedUser name={"Chrystian Nwamba"} followers={426} avatar={'https://bit.ly/dan-abramov'}/>
      
      <Box fontSize={12} mt={5} color={"gray.500"} alignSelf={'start'}>
        &copy; 2024 Build by{" "}
        <Link
          href="https://www.linkedin.com/in/kuzin-peter-68b111250"
          target="_blank"
          color={"blue.500"}
          fontSize={14}
        >
          Koderkup
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
