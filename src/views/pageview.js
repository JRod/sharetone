import * as React from "react"
import { Link } from "gatsby"
import Header from "./header";
import Footer from "./footer";

function PageView({page}) {
  return (
    <div className="wrapper">
      <Header/>
      <p>{page.inhalt.inhalt}</p>
      <Footer/>
    </div>

  )
}

export default PageView
