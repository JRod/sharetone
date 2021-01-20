import React from "react"
import Header from "./header"
import Footer from "./footer"
import Helmet from "react-helmet";

import LocationsNav from "./locationsNav";
import {Link} from "gatsby";


const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Audi0Core</title>
        <meta name="description" content="Best Audiosharing in the World" />
        <html lang="en"  />
      </Helmet>
      <div className="container  mx-auto font-sans ">
        <Header />
        <main className="flex flex-row-reverse">
          <div id="content" className="flex flex-col w-2/3 mr-8" >
            {children}
          </div>

          <div id="sidebar" className="w-1/3">
            <div className="mb-10">
              <ul>
                <li className="font-mono font-light text-lg text-blue-700 mb-4">
                  <Link  to="/">Home</Link>
                </li>
                <li className="font-mono font-light text-lg text-blue-700 mb-4">
                  <Link  to='/about'>About AudioC0RE</Link>
                </li>
              </ul>
            </div>
            <div id="side" className="mb-6 flex-none" >
              <LocationsNav/>
            </div>

          </div>
        </main>
        <Footer/>
      </div>
    </>
  )
}

export default Layout
