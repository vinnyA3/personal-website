module.exports = {
  siteMetadata: {
    title: `Vincent Aceto`,
    description: `Vincent Aceto.  A Software Engineer based in NYC.`,
    author: `@vinnya3`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Inconsolata`], // TODO: select font sizes
      },
    },
  ],
}
