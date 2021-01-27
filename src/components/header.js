import React from "react";
import TopMenu from "./topmenu";
import Brand from "./brand";
import {Box,  Spacer, Center, HStack} from "@chakra-ui/react"
import {StaticImage} from "gatsby-plugin-image";


const Header = () => {

  return(
    <HStack spacing={12}>
      <Box marginTop={-50}>
        <Logo  />
      </Box>
      <Center>
        <Brand/>
      </Center>
      <Spacer />
      <Box>
        <TopMenu/>
      </Box>
    </HStack>
  )
}
const Logo = () => {
  return(
    <StaticImage src="../images/sharestone_logo.png" alt="sharestone logo" layout="fixed" width={150} height={150}/>
  )

}
export default Header
