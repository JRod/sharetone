import React from "react";
import { graphql, Link } from "gatsby"
function AboutPage ({data}) {

  return (
    <p>{data.page.inhalt.inhalt}</p>
  )

}

export default AboutPage

export const query = graphql`
    {
        page: contentfulPage {
            name
            inhalt {
                inhalt
            }
        }
    }
`
