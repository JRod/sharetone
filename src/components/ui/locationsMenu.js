import React from "react";
import { Link, Text } from "@chakra-ui/react"
import {useStaticQuery,graphql, Link as GatsbyLink} from "gatsby";


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
        {locations.map(location => (
          <LocationMenuItem location={location}/>
        ))}
      
    </>
  )
}

const LocationMenuItem = ({location},props) => {
  const {name,gatsbyPath}=location
  const { children, isLast,  ...rest } = props
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <Link as={GatsbyLink}  color="teal.500" to={gatsbyPath}>{name}</Link>
    </Text>
  )    
  
}
export default LocationsMenu

