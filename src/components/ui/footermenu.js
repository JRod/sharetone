import React from 'react';
import {Link as GatsbyLink} from "gatsby";
import {Link, Flex, Spacer} from "@chakra-ui/react";

const Footermenu = () => {
  return (
    <>

    <Flex>
      <span className="copyright">© 2021 AudioC0re</span>
    </Flex>
    <Spacer/>
    <Flex>
      <Link as={GatsbyLink} color="teal.500" to="/contact">Contact us!</Link>
      </Flex>
    </>
  );
};

export default Footermenu;
