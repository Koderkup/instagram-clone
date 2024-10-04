import React from "react";
import PostHeader from "./PostHeader";
import PostFooter from "./PostFooter";
import { Box, Image } from "@chakra-ui/react";
const FeedPost = ({img, username, avatar}) => {
  return (
    <>
      <PostHeader avatar={avatar} username={username}/>
      <Box my={2}>
        <Image src={img} alt='user profile pic' borderRadius={4} overflow={'hidden'}/>
      </Box>
      <PostFooter username={username}/>
    </>
  );
};

export default FeedPost;
