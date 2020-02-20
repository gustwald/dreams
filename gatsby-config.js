module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
            variants: [`100`, `700`]
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-custom-api",
      options: {
          url: {
              development: "http://localhost:3000/api/dreams",
              production: "http://localhost:3000/api/dreams"
          },
          rootKey: "dreamsApi",
      }
  },
  {
    resolve: "gatsby-plugin-react-svg",
    options: {
      rule: {
        include: /assets/
      }
    }
  },
  {
    resolve: `gatsby-plugin-sass`,
  },
  ],
}
