import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../structural/Layout';

const IndexPage = ({ data, location }) => (
    <Layout data={data} location={location} />
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
export default IndexPage;
