const languages = require('./src/data/languages');
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Centre Multisport Rosemere`,
    addressLine: `354 Montée Lesage`,
    city: `Rosemère`,
    postalCode: `J7A4S2`,
    phone: `+1 450 621-2520`,
    email: `cdcsr@videotron.ca`,
    languages
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'any',
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: false
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
        accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: false
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
  ],
}
