import React from "react"
import Helmet from "react-helmet";

import Header from "./header"
import Footer from "./footer"
import SideBar from "./sidebar";

import {Box, Flex, VStack,HStack} from "@chakra-ui/react"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Audi0Core</title>
        <meta name="description" content="Best Audiosharing in the World" />
        <html lang="en"  />
      </Helmet>
      <VStack spacing={8} align="stretch" size="full" marginX={10} marginY={20}>
        <Flex as="header" >
          <Header />
        </Flex>
        <HStack as="main" spacing={8}>
          <Box >
            <SideBar/>
          </Box>
          <Box align="stretch">
            {children}
          </Box>
        </HStack>
        <Flex as="footer">
          <Footer/>
        </Flex>
      </VStack>
    </>
  )
}

export default Layout
