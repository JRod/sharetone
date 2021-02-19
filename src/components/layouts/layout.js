import React from "react"

import Header from "../sections/header"
import Footer from "../sections/footer"
import SideBar from "../sections/sidebar";
import SEO from "../sections/seo";
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
