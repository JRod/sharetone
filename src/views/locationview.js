import * as React from "react"


function LocationView({location}) {
  return (
    <>
        <h1>{location.contentfulLocation.name}</h1>
        <p>{location.contentfulLocation.loc.lat} {location.contentfulLocation.loc.lon}</p>
    </>
  )
}

export default LocationView
