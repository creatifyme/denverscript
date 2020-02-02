module.exports = {
  siteMetadata: {
    title: 'DenverScript',
    description: 'DenverScript meetup website',
    author: '@gatsbyjs',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'DenverScript',
        short_name: 'denverscript',
        start_url: '/',
        background_color: '#F7DF1D',
        theme_color: '#F7DF1D',
        display: 'minimal-ui',
        // icon: 'src/images/gatsby-icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-styled-components',
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto'],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
