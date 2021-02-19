import React from "react";
import { Link, Button } from "@chakra-ui/react"
import {Link as GatsbyLink} from "gatsby"

const TopMenu = () => {
  return (
    <>
      <Button marginRight={3} colorScheme="teal" variant="outline">
        <Link as={GatsbyLink} color="teal.500" to="/">Home</Link>
      </Button>

      <Button colorScheme="teal" variant="outline">
        <Link as={GatsbyLink} color="teal.500" to='/about'>About AudioC0RE</Link>
      </Button>
    </>
  )
}
export default TopMenu
