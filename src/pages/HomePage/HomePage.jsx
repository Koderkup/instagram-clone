import React from "react";
import Sidebar from "../../componets/Sidebar/Sidebar.jsx";
import { Container, Flex, Box } from "@chakra-ui/react";
import FeedPosts from '../../componets/FeedPosts/FeedPosts.jsx'
import SuggestedUsers from "../../componets/SuggestedUsers/SuggestedUsers.jsx";
const HomePage = () => {
  return (
    <Container maxW={"container.lg"}>
      <Flex gap={20}>
        <Box flex={2} py={10}>
          <FeedPosts/>
        </Box>
        <Box
          flex={3}
          mr={20}
          display={{ base: "none", lg: "block" }}
          maxW={"300px"}
        >
        <SuggestedUsers/>
        </Box>
      </Flex>
    </Container>
  );
};

export default HomePage;
