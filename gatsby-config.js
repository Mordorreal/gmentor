module.exports = {
  pathPrefix: `/gmentor`,
  siteMetadata: {
    title: 'GMentor - найди своего Ментора',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-121318462-1",
        head: true,
        anonymize: false,
        respectDNT: false,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        showSpinner: false,
      },
    },
  ],
}
