import React from "react"
import { graphql } from "gatsby"
import LocationView from "../../views/locationview"

export default function contentfulLocation(props) {
 const location = props.data
 return <LocationView location={location} />
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
