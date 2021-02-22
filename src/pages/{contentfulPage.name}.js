import React from "react"
import { graphql } from "gatsby"
import PageView from "../components/layouts/pageview";
import Layout from "../components/layouts/layout";

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
