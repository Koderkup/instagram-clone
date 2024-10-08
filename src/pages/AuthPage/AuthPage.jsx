import { Container, Flex, Box, Image, VStack } from "@chakra-ui/react";
import AuthForm from "../../componets/AuthForm/AuthForm";

const AuthPage = () => {
  return (
    <Flex maxH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      <Container maxW={"container.md"}>
        <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
          <Box display={{ base: "none", md: "block" }}>
            <Image src="/auth.png" h={650} alt="Phone image" />
          </Box>
          <VStack spacing={4} align={"stretch"} my={"50px"}>
            <AuthForm />
            <Box textAlign={"center"}>Get the App.</Box>
            <Flex gap={5} justifyContent={"center"}>
              <Image src="/playstore.png" h={10} alt="Playstore.logo" />
              <Image src="/microsoft.png" h={10} alt="Microsoft.logo" />
            </Flex>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default AuthPage;
