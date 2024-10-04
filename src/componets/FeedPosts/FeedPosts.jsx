import { useState, useEffect } from "react";
import {
  Container,
  Skeleton,
  VStack,
  Flex,
  SkeletonCircle,
  Box
} from "@chakra-ui/react";
import FeedPost from "./FeedPost";
const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [1, 2, 3, 4].map((_, idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-satrt"} mb={10}>
            <Flex>
              <SkeletonCircle size={"10"} />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height={"10px"} w={"200px"} />
                <Skeleton height={"10px"} w={"200px"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"500px"}>Content wrapped</Box>
            </Skeleton>
          </VStack>
        ))}
      {
        !isLoading && (
          <>
            <FeedPost
              img={"/img1.png"}
              username={"asaprogrammer_"}
              avatar={"/img1.png"}
            />
            <FeedPost
              img={"/img1.png"}
              username={"asaprogrammer_"}
              avatar={"/img1.png"}
            />
            <FeedPost
              img={"/img1.png"}
              username={"asaprogrammer_"}
              avatar={"/img1.png"}
            />
            <FeedPost
              img={"/img1.png"}
              username={"asaprogrammer_"}
              avatar={"/img1.png"}
            />
          </>
        )
      }
    </Container>
  );
};

export default FeedPosts;
