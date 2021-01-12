import React from "react";
import {headingStyles, linkStyle, pageStyles} from "../styles/styles";
import {Link} from "gatsby";
import LocationsNav from "./locationsNav";

const Header = () => {

  return(
    <header className="container mt-32 mb-12">
        <h1 className="font-mono font-light text-lg text-blue-700 mb-4">
          AudioC0RE
        </h1>
        <h2 style={headingStyles}>the leading headphones sharing app in the world!</h2>

    </header>
  )
}

export default Header
