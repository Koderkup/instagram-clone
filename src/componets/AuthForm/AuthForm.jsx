import React, { useState } from "react";
import {
  Box,
  VStack,
  Image,
  Input,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import Login from "./Login";
import SignUp from "./SignUp";
import GoogleAuth from "./GoogleAuth";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src="/logo.png" alt="instagram" h={24} cursor={"pointer"} />
          {isLogin ? <Login /> : <SignUp />}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            gap={1}
            my={4}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text color={"white"} mx={1}>
              OR
            </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>
          <GoogleAuth prefix={isLogin ? "Log in" : "Sign up"} />
        </VStack>
      </Box>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box
            onClick={() => setIsLogin(!isLogin)}
            cursor={"pointer"}
            color={"blue.500"}
          >
            {!isLogin ? "Log in" : "Sign Up"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
