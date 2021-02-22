import React from "react"
import {Box, Flex,HStack} from "@chakra-ui/react"

import Header from "../sections/header"
import Footer from "../sections/footer"
import SideBar from "../sections/sidebar";
import SEO from "../sections/seo";



const Layout = (props) => {
  return (
    <>
      <SEO/>
      <Flex direction="column" align="center" maxW={{ xl: "1200px" }} m="0 auto" {...props}>        
        <Box as="header" >
          <Header />
        </Box>
        <HStack as="main" spacing={8}>          
          <Box>
            <SideBar/>
          </Box>
          <Box align="stretch">
            {props.children}
          </Box>
        </HStack>          
        <Footer/>
          
        
      </Flex>
    </>
  )
}

export default Layout
