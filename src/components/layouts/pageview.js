import * as React from "react"
import {Box} from "@chakra-ui/react";
import {StaticImage} from "gatsby-plugin-image";


function PageView({page}) {
  return (
    <>    
      <Box>
        <div  dangerouslySetInnerHTML={{ __html: page.inhalt.inhalt }}/>
        {page.name === "index" ? (
            <HeadPhone/> ):
          (
            <p></p> )
        }
      </Box>
    </>
  )
}
const HeadPhone = () => {
  return(
    <StaticImage src="../../assets/images/headphone.jpg" alt="headphones" layout="fixed" width={600} height={400}/>
  )
}
export default PageView
