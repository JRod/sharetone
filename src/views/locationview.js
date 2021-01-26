import * as React from "react"

import {GatsbyImage} from "gatsby-plugin-image";
import {Heading, Text} from "@chakra-ui/react"
function LocationView({location,image}) {
  const {name,loc} = location

  return (
    <>
      <Heading as="h1" >{name}</Heading>
      <GatsbyImage image={image} alt={name} layout="constrained"/>
      <Text>Latitude: {loc.lat} Longitude: {loc.lon}</Text>
    </>
  )
}

export default LocationView
