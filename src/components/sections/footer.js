import React from "react";
import {Flex} from "@chakra-ui/react"
import Footermenu from "../ui/footermenu";

const Footer = () => {
  return (
    
    <Flex direction="row"  w={"100%"}  as="footer"  bg={"gray.200"} > 
      <Footermenu/>
    </Flex> 
    
  )

}
export default Footer
