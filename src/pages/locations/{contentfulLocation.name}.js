import React from "react"
import { graphql } from "gatsby"
import LocationView from "../../components/layouts/locationview"
import Layout from "../../components/layouts/layout";

export default function contentfulLocation({data}) {
 const location = data.contentfulLocation


 return (
   <Layout>
    <LocationView location={location}   />
   </Layout>
 )
}

export const query = graphql`
  query($id: String!) {
    contentfulLocation(id: { eq: $id }) {
      name
      loc {
        lat
        lon
      }
        skyline{
            gatsbyImageData(
                width: 600
                height: 400
                placeholder: BLURRED
            )
        }
    }
  }
`
