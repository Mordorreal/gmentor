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
  ],
}
