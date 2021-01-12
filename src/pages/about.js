import React from "react";
import { graphql} from "gatsby"
import PageView from "../views/pageview";
import Layout from "../components/layout";

function AboutPage ({data}) {
  return (
    <Layout>
      <PageView page={data.page}/>
    </Layout>
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
