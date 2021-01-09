import React from "react";
import { graphql, Link } from "gatsby"
import Header from "../views/header";
import PageView from "../views/pageview";

function AboutPage ({data}) {
  return (
    <>
    <PageView page={data.page}/>
    </>
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
