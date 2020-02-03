import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../structural/Layout';
import Hero from '../components/Hero';
import OfferList from '../components/OfferList';
import OrgDescription from '../components/OrgDescription';
import News from '../components/NewsSlider';
import Gallery from '../components/Gallery';
import LogoLine from '../components/LogoLine';

const MainPage = ({ data, location, pageContext }) => (
  <Layout data={data} location={location}>
    <Hero page={pageContext.template} />
    <OfferList/>
    <OrgDescription />
    <News />
    <Gallery type="index" background="primaryLight"/>
    <LogoLine background="primaryDark" header="partners"/>
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
