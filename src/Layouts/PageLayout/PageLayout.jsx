import { Flex, Box } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../componets/Sidebar/Sidebar";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth} from "../../firebase/firebase";
import Navbar from "../../componets/Navbar/Navbar";

const PageLayout = ({ children }) => {;
  const { pathname } = useLocation();
  const [user, loading, error] = useAuthState(auth);
  const canRenderSidebar = pathname !== '/auth' && user;
  const canRenderNavbar = !user && !loading && pathname !== '/auth'
  return (
    <Flex>
      {canRenderSidebar ? (
          <Box w={{ base: "70px", md: "240px" }}>
            <Sidebar />
          </Box>
      ) : null}
      {canRenderNavbar ? <Navbar/> : null }
      <Box flex={1} w={{ base: "calc(100%-70px)", md: "calc(100%-240px)" }}>
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;
