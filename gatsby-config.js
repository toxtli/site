module.exports = {
  siteMetadata: {
    title: `Resume Template`,
    description: `Resume Template. Design coded from https://startbootstrap.com/themes/resume/ `,
    author: `@atarsa`,
  },
  pathPrefix: "/resume-template",
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `resume-template`,
        short_name: `resume`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#bd5d38`,
        display: `minimal-ui`,
        icon: `src/images/fox.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
