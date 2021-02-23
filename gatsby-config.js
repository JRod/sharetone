require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: "Sharetone",
    siteUrl: "https://sharetone.gtsb.io",
    description: "Best headgear in the world",
    twitterUsername: "@snotrod",
    titleTemplate: "%s - Sharetone",
    image: "/sharestone_logo.png"
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sharetone`,
        short_name: `Sharetone`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/assets/images/icon.png`
      },
    },
    'gatsby-plugin-offline',
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",    
    "gatsby-plugin-image",
    "@chakra-ui/gatsby-plugin",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-formium`,
      options: {
        // Get your projectId from https://dashboard.formium.io
        projectId: process.env.GATSBY_FORMIUM_PROJECTID,
        // Generate a personal access token by going to https://dashboard.formium.io/account#tokens
        accessToken: process.env.FORMIUM_TOKEN,
      }
    },    
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: "http://localhost:1337",
        contentTypes: [
          "locations",          
        ],
        queryLimit: 1000,
      },
    },
    
  ],
};
