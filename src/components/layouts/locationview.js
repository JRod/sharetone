import * as React from "react"

import {GatsbyImage} from "gatsby-plugin-image";
import {Heading, Text, Box} from "@chakra-ui/react"
function LocationView({location}) {
  const {name,loc,skyline} = location

  return (
    <>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <GatsbyImage image={skyline.gatsbyImageData} alt={name} layout="constrained"/>
        <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
          <Text>Latitude: {loc.lat} Longitude: {loc.lon}</Text>
        </Box>
        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          <Heading as="h1" >{name}</Heading>
        </Box>
      </Box>
    </>
  )
}

export default LocationView
