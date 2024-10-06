import React from "react";
import { Box, Flex, Link, Avatar, Tooltip, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from "../../assets/constants";
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const Sidebar = () => {
  const sidebarItems = [
    { icon: <AiFillHome size={25} />, text: "Home", link: "/" },

    {
      icon: <SearchLogo />,
      text: "Search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notifications",
    },
    { icon: <CreatePostLogo />, text: "Create" },
    {
      icon: <Avatar size={"sm"} name="user" src="/profilepic.png" />,
      text: "Profile",
      link: "/asaprogrammer",
    },
  ];

  const { handleLogout, isLoggingOut, error } = useLogout();
  return (
    <Box
      height={"100vh"}
      border={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={"column"} w={"full"} h={"full"} gap={10}>
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
          cursor={"pointer"}
        >
          <InstagramLogo />
        </Link>
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "block", md: "none" }}
          cursor={"pointer"}
          borderRadius={6}
          _hover={{
            bg: "whiteAlpha.200",
          }}
          w={10}
        >
          <InstagramMobileLogo />
        </Link>
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
          {sidebarItems.map((item, i) => (
            <Tooltip
              key={i}
              hasArrow
              label={item.text}
              placement="right"
              ml={1}
              openDelay={500}
              display={{ base: "block", md: "none" }}
            >
              <Link
                to={item.link || "#"}
                as={RouterLink}
                display="flex"
                alignItems="center"
                gap={4}
                p={2}
                borderRadius={6}
                _hover={{
                  bg: "whiteAlpha.400",
                }}
                justifyItems={{ base: "center", md: "flex-start" }}
                w={{ base: 10, md: "full" }}
              >
                {item.icon}
                <Box display={{ base: "none", md: "block" }}>{item.text}</Box>
              </Link>
            </Tooltip>
          ))}
        </Flex>
        <Tooltip
          hasArrow
          label={"Logout"}
          placement="right"
          ml={1}
          openDelay={500}
          display={{ base: "block", md: "none" }}
        >
          <Flex
            onClick={handleLogout}
            alignItems="center"
            gap={4}
            p={2}
            borderRadius={6}
            _hover={{
              bg: "whiteAlpha.400",
            }}
            justifyItems={{ base: "center", md: "flex-start" }}
            w={{ base: 10, md: "full" }}
            cursor={"pointer"}
            mt={"auto"}
          >
            <BiLogOut size={25} />
            <Button
              display={{ base: "none", md: "block" }}
              variant={"ghost"}
              _hover={{ bg: "transparent" }}
              isLoading={isLoggingOut}
            >
              Logout
            </Button>
          </Flex>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Sidebar;
