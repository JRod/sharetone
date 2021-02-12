import React from 'react';
import {Link as GatsbyLink} from "gatsby";
import {Link} from "@chakra-ui/react";

const Footermenu = () => {
  return (
    <>

    <div>
      <span className="copyright">© 2021 AudioC0re</span>
    </div>
    <div>
      <Link as={GatsbyLink} color="teal.500" to="/contact">Contact us!</Link>
    </div>
    </>
  );
};

export default Footermenu;
