import * as React from "react"


function LocationView({location}) {
  return (
    <>
      <h1 className="font-mono text-2xl">{location.contentfulLocation.name}</h1>
      <p>Latitude: {location.contentfulLocation.loc.lat}</p>
      <p>Longitude: {location.contentfulLocation.loc.lon}</p>
    </>
  )
}

export default LocationView
