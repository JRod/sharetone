import React from "react";
import { Text } from "@chakra-ui/react"
import {Link as GatsbyLink} from "gatsby"
import LocationsMenu from "./locationsMenu";


const MenuItems = (props) => {
  const { children, isLast, to = "/", ...rest } = props
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <GatsbyLink to={to}>{children}</GatsbyLink>
    </Text>
  )
}

const TopMenu = () => {
  return (
    <>      
    <LocationsMenu title={""}/>
      <MenuItems to="/">AudioC0RE</MenuItems>      
      <MenuItems to="/how">How It works </MenuItems>
      <MenuItems to="/faetures">Features </MenuItems>
      <MenuItems to="/pricing">Pricing </MenuItems>      
      <MenuItems to="/about" isLast>About us </MenuItems>                  
    </>
  )
}
export default TopMenu
