import React from "react"
import { graphql } from "gatsby"
import LocationView from "../../views/locationview"
import Layout from "../../components/layout";

export default function contentfulLocation(props) {
 const location = props.data
 return (
   <Layout>
   <LocationView location={location} />
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
    }
  }
`
