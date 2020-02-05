const languages = require('./src/data/languages');
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Centre Multisports Rosemere`,
    addressLine: `354 Montée Lesage`,
    city: `Rosemère`,
    postalCode: `J7A 4S2`,
    phone: `+1 450 621-2520`,
    email: `multisportsrosemere@outlook.com`,
    languages
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyForNull: 'fr',
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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `montserrat`,
        ],
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/assets/image/CDCSR_logotype-coul_seul (1)-1.png`
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-svg`,
  ],
}
