const { resolve } = require('path');

const pathToVariables = resolve(__dirname, 'src', 'components', 'variables.scss');
const pathToMixins = resolve(__dirname, 'src', 'components', 'mixins.scss');


module.exports = {
  pathPrefix: `/gmentor`,
  siteMetadata: {
    title: 'GMentor - найди своего Ментора',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        data: `@import '${pathToVariables}'; @import '${pathToMixins}';`,
        includePaths: [
          pathToVariables,
          pathToMixins,
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: "UA-121318462-1",
        head: true,
        anonymize: false,
        respectDNT: false,
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        showSpinner: false,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://online.us18.list-manage.com/subscribe/post?u=9f9933f5594816a2e4d77cc03&amp;id=3d7f3803ad',
      },
    },
  ],
}
