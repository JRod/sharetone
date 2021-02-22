import React from "react"
import PropTypes from "prop-types"
import {Box,Flex,Heading,Stack} from "@chakra-ui/react"
import {StaticImage} from "gatsby-plugin-image";
import LocationsMenu from "../ui/locationsMenu"
export default function Hero({title,subtitle,image,...rest}) {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="70vh"
      px={8}
      mb={16}
      {...rest}
    >
      <Stack
        spacing={4}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={["center", "center", "left", "left"]}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          {subtitle}
        </Heading>     
        <LocationsMenu/>           
      </Stack>      
      <Box borderWidth="1px" borderRadius="full"  width={800} height={400}>            
        <StaticImage src="../../assets/images/headphone.jpg" alt="headphones"  />
      </Box>
    </Flex>
  )
}

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
}

Hero.defaultProps = {
  title: "Welcome to AudioC0re",
  subtitle:"The leading headphones sharing app in the world! Check out our new Locations ",
  image: "https://source.unsplash.com/collection/404339/800x600",
  ctaText: "Create your account now",
  ctaLink: "/signup",
}
