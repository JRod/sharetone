import React from "react";
import PropTypes from "prop-types"
import {StaticImage} from "gatsby-plugin-image";

const Logo = ({src,alt,width,height,...rest}) => {
    return(
      <StaticImage src="../../assets/images/sharestone_logo.png" alt={alt} layout="fixed" width={150} height={150}/>
    )  
  }


  Logo.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number    
  }
  
  Logo.defaultProps = {
    src: "../../assets/images/sharestone_logo.png",
    alt:"sharestone logo",
    width: 150,
    height: 150,    
  }
   
export default Logo  