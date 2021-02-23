import React from "react"
import { graphql } from "gatsby"
import LocationCard from "../../components/ui/locationcard"
import FullPageLayout from "../../components/layouts/fullpagelayout";

export default function strapiLocation({data}) {
 const location = data.strapiLocations

 return (
   
  <FullPageLayout>      
    <LocationCard location={location} />
  </FullPageLayout>
   
 )
}

export const query = graphql`
query($id: String!) {
    strapiLocations(id: {eq: $id}) {
      Name
      skyline {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`
