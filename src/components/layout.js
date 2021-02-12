import React from "react"

import Header from "./header"
import Footer from "./footer"
import SideBar from "./sidebar";
import SEO from "./seo";
import {Box, Flex, VStack,HStack} from "@chakra-ui/react"

const Layout = ({ children }) => {
  return (
    <>
      <SEO/>
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
