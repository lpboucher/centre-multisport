import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../structural/Layout';
import Hero from '../components/Hero';
import OfferList from '../components/OfferList';
import OrgDescription from '../components/OrgDescription';
import News from '../components/NewsSlider';
import Contact from '../components/Contact';
import Gallery from '../components/Gallery';

const MainPage = ({ data, location, pageContext }) => (
  <Layout data={data} location={location}>
    <Hero page={pageContext.template} />
    <OfferList/>
    <OrgDescription />
    <News />
    <Gallery type="index" background="primaryLight"/>
    <Contact background="primaryDark"/>
  </Layout>
);

export const query = graphql`
  query SiteMain {
    site {
        siteMetadata{
          languages {
            defaultLangKey
            langs
          }
        }
    }
  }
`;
export default MainPage;
