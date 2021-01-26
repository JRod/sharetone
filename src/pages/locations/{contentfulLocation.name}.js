import React from "react"
import { graphql } from "gatsby"
import LocationView from "../../views/locationview"
import Layout from "../../components/layout";
import {getImage} from "gatsby-plugin-image";

export default function contentfulLocation({data}) {
 const location = data.contentfulLocation
 const imageData = getImage(data.file)

 return (
   <Layout>
    <LocationView location={location} image={imageData}  />
   </Layout>
 )
}
export const query = graphql`
  query($id: String!,$name: String) {
    contentfulLocation(id: { eq: $id }) {
      name
      loc {
        lat
        lon
      }
    }
    file(name: {eq: $name}) {
      childImageSharp {
        gatsbyImageData(
            width: 600
            height: 400
            placeholder: BLURRED
        )
      }
    }
  }
`
