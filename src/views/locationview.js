import * as React from "react"
import { Link } from "gatsby"

function LocationView({location}) {
  return (
    <div className="wrapper">
      <header>
        <Link to="/">Go back to "Home"</Link>
      </header>
      <main>
        <h1>{location.contentfulLocation.name}</h1>
        <p>{location.contentfulLocation.loc.lat} {location.contentfulLocation.loc.lon}</p>
      </main>
      <footer>Location provided by Me.</footer>
    </div>
  )
}

export default LocationView
