import React from "react"

import SEO from "../sections/seo";
import Header from "../sections/header"
import Footer from "../sections/footer"
import SideBar from "../sections/sidebar";

import {Box, Flex,HStack} from "@chakra-ui/react"
import LocationsMenu from "../ui/locationsMenu";


const LeftSideBarLayout = (props) => {
  return (
    <>
    <SEO/>
    <Flex 
      direction="column" 
      align="center" 
      maxW={{ xl: "1200px" }} 
      boxShadow="dark-lg" 
      p="6" 
      rounded="md" 
      bg="white" 
      borderWidth="2px" 
      borderRadius="lg" 
      m="0 auto" 
      {...props}
      >
        <Header />            
        <HStack as="main" spacing={8}>          
          <Box>
            <SideBar>
              <LocationsMenu title={"Locations"}/>
            </SideBar>  
          </Box>
          <Flex
            align="center"
            justify={{ base: "center", md: "space-around", xl: "space-between" }}
            direction={{ base: "column-reverse", md: "row" }}
            wrap="no-wrap"
            minH="70vh"
            px={8}
            mb={16}           
          >
            {props.children}
          </Flex>
        </HStack>          
        <Footer />
    </Flex>                                                      
    </>
  )
}

export default LeftSideBarLayout
