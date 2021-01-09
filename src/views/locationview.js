import * as React from "react"
import { Link } from "gatsby"
import Header from "./header";
import Footer from "./footer";


function LocationView({location}) {
  return (
    <div className="wrapper">
      <Header/>
      <main>
        <h1>{location.contentfulLocation.name}</h1>
        <p>{location.contentfulLocation.loc.lat} {location.contentfulLocation.loc.lon}</p>
      </main>
      <Footer/>
    </div>
  )
}

export default LocationView
