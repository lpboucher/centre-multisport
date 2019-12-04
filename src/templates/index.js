import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../structural/Layout';
import Hero from '../components/Hero';
import OrgDescription from '../components/OrgDescription';

const MainPage = ({ data, location }) => (
  <Layout data={data} location={location}>
    <Hero />
    <OrgDescription />
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
