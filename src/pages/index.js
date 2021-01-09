import * as React from "react"
import {pageStyles} from "../styles/styles";
import Header from "../views/header";
import {Helmet} from "react-helmet";
import Footer from "../views/footer";


const IndexPage = () => {

  return (
    <>
    <Helmet>
      <title>AudioC0RE</title>
    </Helmet>
    <Header/>
    <main style={pageStyles}/>
    <Footer/>
    </>
  )
}

export default IndexPage

