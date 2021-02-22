import React from "react"
import { Flex } from "@chakra-ui/react"
import Header from "../sections/header"
import Footer from "../sections/footer" 
import SEO from "../sections/seo"


export default function LandingLayout(props) {
  return (
    <>
        <SEO/>
        <Flex direction="column" align="center" maxW={{ xl: "1200px" }} m="0 auto" {...props}>
            <Header />            
            {props.children}
            <Footer />
        </Flex>
    </>
  )
}
