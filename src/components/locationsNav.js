import React from "react";
import {docLinkStyle, listStyles} from "../styles/styles";
import {useStaticQuery,graphql, Link} from "gatsby";

const LocationsNav = () =>{
  const data = useStaticQuery(graphql`
      {
          locations: allContentfulLocation {
              nodes {
                  name
                  id
                  loc {
                      lat
                      lon
                  }
                  nameSlug: gatsbyPath(filePath: "/locations/{contentfulLocation.name}")
              }
          }
      }
  `)

  return(
    <ul style={listStyles}>
      {data.locations.nodes.map(location => (
        <li style={docLinkStyle} key={location.id}>
          <Link to={location.nameSlug}>{location.name}</Link>
        </li>
      ))}
    </ul>
  )

}

export default LocationsNav

