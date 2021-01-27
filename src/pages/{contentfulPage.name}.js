import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout";
import PageView from "../views/pageview";

export default function contentfulLocation({data}) {

  return (
    <Layout>
      <PageView page={data.page}/>
    </Layout>
  )
}

export const query = graphql`
    query($id: String!)  {
        page:contentfulPage(id: { eq: $id }) {
            name
            inhalt {
                inhalt
            }
        }
    }
`
