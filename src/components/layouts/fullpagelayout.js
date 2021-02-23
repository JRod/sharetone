import React from "react"

import SEO from "../sections/seo"
import Header from "../sections/header"
import Footer from "../sections/footer" 

import { Flex } from "@chakra-ui/react"


export default function FullPageLayout(props) {
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
            {props.children}
            <Footer />
        </Flex>
    </>
  )
}
