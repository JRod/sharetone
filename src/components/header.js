import React from "react";
import TopMenu from "./topmenu";
import Brand from "./brand";
import {Box,  Spacer} from "@chakra-ui/react"


const Header = () => {

  return(
    <>
      <Box >
        <Logo/>
      </Box>
      <Box bg="tomato" >
        <Brand/>
      </Box>
      <Spacer />
      <Box>
        <TopMenu/>
      </Box>
    </>
  )
}
const Logo = () => {
  return(
    <h1>LOGO</h1>
  )

}
export default Header
