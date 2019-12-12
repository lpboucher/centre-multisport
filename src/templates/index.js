import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

import Layout from '../structural/Layout';
import Hero from '../components/Hero';
import OfferList from '../components/OfferList';
import OrgDescription from '../components/OrgDescription';
import News from '../components/News';
import Contact from '../components/Contact';
import Gallery from '../components/Gallery';

const MainPage = ({ data, location, pageContext }) => (
  <Layout data={data} location={location}>
    <Helmet>
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      <script src="https://kwes.io/js/kwes.js"></script>
    </Helmet>
    <Hero />
    <OfferList locale={pageContext.locale}/>
    <OrgDescription />
    <News />
    <Contact />
    <Gallery background="primaryLight"/>
  </Layout>
);

export const query = graphql`
  query SiteMain($locale: String!) {
    site {
        siteMetadata{
          languages {
            defaultLangKey
            langs
          }
        }
    }
    test: allContentfulTest(filter: { node_locale: { eq: $locale } }) {
        edges {
            node {
                title
                node_locale
            }
        }
    }
  }
`;
export default MainPage;
