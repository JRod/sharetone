import React from "react";
import {linkStyle, pageStyles} from "../styles/styles";
import {Link} from "gatsby";

const Footer = () => {
  return (
    <footer style={pageStyles}>
      Locations provided by Contentful.
      <Link style={linkStyle}  to='/about'>About AudioC0RE</Link>
    </footer>
  )

}
export default Footer
