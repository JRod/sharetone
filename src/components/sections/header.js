import React from "react";
import {Box,Flex} from "@chakra-ui/react"
import MenuToggle from "../ui/menu_toggle";
import TopMenu from "../ui/topmenu";
import Logo from "../ui/logo"

const Header = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggle = () => setIsOpen(!isOpen);
      
      return (
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          w="100%"
          mb={8}
          p={8}
          bg={["primary.500", "primary.500", "transparent", "transparent"]}
          color={["white", "white", "primary.700", "primary.700"]}
          {...props}
        >
          <Flex align="center">
            <Logo width={150} height={150} />                        
          </Flex>
              
          <MenuToggle toggle={toggle} isOpen={isOpen}/>
    
          <Box
            display={{ base: isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
          >
            <Flex
              align={["center", "center", "center", "center"]}
              justify={["center", "space-between", "flex-end", "flex-end"]}
              direction={["column", "row", "row", "row"]}
              pt={[4, 4, 0, 0]}
            >
              <TopMenu/>              
            </Flex>
          </Box>
        </Flex>
      )
    }
  
export default Header
