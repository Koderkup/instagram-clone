import React from "react";
import SuggestedUser from "./SuggestedUser";
import SuggestedHeader from "./SuggestedHeader";
import {
  VStack,
  Flex,
  Box,
  Text,
  Link,
  Stack,
  Skeleton,
} from "@chakra-ui/react";
import useGetSuggestedUsers from "../../hooks/useGetSuggestedUsers";
import useSearchUser from "../../hooks/useSearchUser";
const SuggestedUsers = () => {
  const { setUser } = useSearchUser();
  const { isLoading, suggestedUsers } = useGetSuggestedUsers();
  if (isLoading) {
    return (
      <Stack spacing={4}>
        <Skeleton height="40px" />
        <Skeleton height="40px" />
        <Skeleton height="40px" />
      </Stack>
    );
  }
  return (
    <VStack gap={4} px={6} py={8}>
      <SuggestedHeader />
      {suggestedUsers.length !== 0 && (
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
          <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
            Suggested for you
          </Text>
          <Text
            fontSize={12}
            fontWeight={"bold"}
            _hover={{ color: "gray.400" }}
            cursor={"pointer"}
          >
            See All
          </Text>
        </Flex>
      )}
      {suggestedUsers.map((user) => (
        <SuggestedUser user={user} key={user.id} setUser={setUser} />
      ))}

      <Box fontSize={12} mt={5} color={"gray.500"} alignSelf={"start"}>
        &copy; 2024 Build by{" "}
        <Link
          href="https://www.linkedin.com/in/kuzin-peter-68b111250"
          target="_blank"
          color={"blue.500"}
          fontSize={14}
        >
          Koderkup <sup>[(ƿқ)]</sup>
        </Link>
      </Box>
    </VStack>
  );
};

export default SuggestedUsers;
