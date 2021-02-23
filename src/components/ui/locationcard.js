import * as React from "react"

import {GatsbyImage} from "gatsby-plugin-image";
import {Heading, Text, Box} from "@chakra-ui/react"

function LocationCard({location}) {
  const {Name,loc,skyline} = location
const image= skyline===null ? "" : skyline.childImageSharp.gatsbyImageData
  return (
    <>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <GatsbyImage image={image} alt={Name} layout="constrained"/>
        <Box color="gray.500" fontWeight="semibold" letterSpacing="wide" fontSize="xs" textTransform="uppercase" ml="2">
         
        </Box>
        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
          <Heading as="h1" >{Name}</Heading>
        </Box>
      </Box>
    </>
  )
}

export default LocationCard
