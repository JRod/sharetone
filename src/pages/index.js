import * as React from "react"
import { Box, Text, Heading } from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout";

const IndexPage = () => {

  return (
    <Layout>

      <Box>
        <Heading as="h1">Welcome to our brand new site.</Heading>
        <HeadPhone/>
      </Box>
      <Box>
        <Text font-size="xl" >Check out where you can find us.</Text>
        <Text font-size="md" >Locations provided by Contentful.</Text>
      </Box>
    </Layout>
  )
}

const HeadPhone = () => {
  return(
    <StaticImage src="../images/headphone.jpg" alt="headphones" layout="fixed" width={600} height={400}/>
    )
}

export default IndexPage

