import React from "react";
import { Link, Button, Text } from "@chakra-ui/react"
import {Link as GatsbyLink} from "gatsby"


const MenuItems = (props) => {
  const { children, isLast, to = "/", ...rest } = props
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link color="teal.500" to={to}>{children}</Link>
    </Text>
  )
}

const TopMenu = () => {
  return (
    <>
      
      <MenuItems to="/how">How It works </MenuItems>
      <MenuItems to="/faetures">Features </MenuItems>
      <MenuItems to="/pricing">Pricing </MenuItems>
      <MenuItems to="/">
        <Button marginRight={3} colorScheme="teal" variant="outline">
          <Link as={GatsbyLink} color="teal.500" to="/">Home</Link>
        </Button>
      </MenuItems>
      <MenuItems to="/about" isLast>
        <Button colorScheme="teal" variant="outline">
          <Link as={GatsbyLink} color="teal.500" to='/about'>About AudioC0RE</Link>
        </Button>
      </MenuItems>

      

      
    </>
  )
}
export default TopMenu
