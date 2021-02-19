import React from "react";

import {useStaticQuery,graphql, Link as GatsbyLink} from "gatsby";
import { Link, Heading } from "@chakra-ui/react"


const LocationsMenu = () => {
  const data = useStaticQuery(graphql`
      {
          locations: allContentfulLocation {
              nodes {
                  id
                  name
                  gatsbyPath(filePath: "/locations/{contentfulLocation.name}")
              }
          }
      }
  `)
  const locations=data.locations.nodes

  return (
    <>
      <Heading as="h4"  color="teal.700">Our Locations</Heading>
      <ul>
        {locations.map(location => (
          <LocationMenuItem location={location}/>
        ))}
      </ul>
    </>
  )
}

const LocationMenuItem = ({location}) => {
  const {id,name,gatsbyPath}=location
  return (
    <li key={id}>
      <Link as={GatsbyLink} color="teal.500" to={gatsbyPath}>{name}</Link>
    </li>
  )
}
export default LocationsMenu

