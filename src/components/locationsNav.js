import React from "react";
import {docLinkStyle,  listStyles} from "../styles/styles";
import {useStaticQuery,graphql, Link} from "gatsby";

const LocationsNav = () => {
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

  return (
    <>
      <h4 className="font-mono text-2xl mb-5">Our Locations</h4>
      <ul>
        {data.locations.nodes.map(location => (
          <li className="font-mono font-light text-lg text-blue-700 mb-4" key={location.id}>
            <Link to={location.nameSlug}>{location.name}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default LocationsNav

