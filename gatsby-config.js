module.exports = {
  siteMetadata: {
    title: "Sharetone",
    siteUrl: "https://sharetone.gtsb.io"
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "nq0yWR9p4HbUM-ynvESf4LNVVJldaJI4PtUk5AAwQVk",
        spaceId: "mwvu26ec6jpx",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
