import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  VStack,
  Image,
  Input,
  Button,
  Flex,
  Text,
  useToast,
} from "@chakra-ui/react";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const toast = useToast();
  const handleAuth = () => {
    if (!inputs.email || !inputs.password || !inputs.confirmPassword)
      toast({
        title: "Error",
        description: "Please fill all fields",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    if (inputs.password !== inputs.confirmPassword)
    toast({
      title: "Error",
      description: "You haven`t confirm password",
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "top-right",
    });
  };
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <>
      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src="/logo.png" alt="instagram" h={24} cursor={"pointer"} />
          <Input
            placeholder="Email"
            type="email"
            name="email"
            fontSize={14}
            value={inputs.email}
            onChange={handleChange}
          />
          <Input
            placeholder="Password"
            type="password"
            name="password"
            fontSize={14}
            value={inputs.password}
            onChange={handleChange}
          />
          {!isLogin ? (
            <Input
              placeholder="Confirm password"
              type="password"
              name="confirmPassword"
              fontSize={14}
              value={inputs.confirmPassword}
              onChange={handleChange}
            />
          ) : null}
          <Button
            w={"full"}
            colorScheme="blue"
            size={"sm"}
            fontSize={14}
            onClick={handleAuth}
          >
            {isLogin ? "Log in" : "Sign Up"}
          </Button>
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
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            cursor={"pointer"}
          >
            <Image src="/google.png" alt="Google logo" w={5} />
            <Text mx="2" color={"blue.500"}>
              Log in with Google
            </Text>
          </Flex>
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
