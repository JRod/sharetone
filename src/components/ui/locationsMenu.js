import React from "react";
import PropTypes from "prop-types"
import {Text,Heading } from "@chakra-ui/react"
import {useStaticQuery,graphql, Link as GatsbyLink} from "gatsby";


const LocationsMenu = ({title,subtitle}) => {
  const data = useStaticQuery(graphql`
  {
    locations: allStrapiLocations {
      nodes {
        Name
        gatsbyPath(filePath: "/locations/{strapiLocations.Name}")
      }
    }
  }
      
  `)
  const locations=data.locations.nodes

  return (
    <>    
        <Heading
          as="h2"
          size="lg"
          fontWeight="bold"
          color="primary.800"
          textAlign={["center", "center", "left", "left"]}          
        >
          {title}
        </Heading>                
        {locations.map(location => (
          <LocationMenuItem location={location}/>
        ))}
      
    </>
  )
}

const LocationMenuItem = ({location},props) => {
  const {Name,gatsbyPath}=location
  const { children, isLast,  ...rest } = props
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      color="teal.500"
      {...rest}
    >
      <GatsbyLink to={gatsbyPath}>{Name}</GatsbyLink>
    </Text>
  )    
  
}

LocationsMenu.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,  
}

LocationsMenu.defaultProps = {
  title: "Check out our new Locations",
  subtitle:"The leading headphones sharing app in the world! ",  
}


export default LocationsMenu

