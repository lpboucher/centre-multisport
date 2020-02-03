import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../structural/Layout';
import Hero from '../components/Hero';
import News from '../components/News';

const ArchivePage = ({data, location, pageContext}) => {
  return (
    <Layout data={data} location={location}>
      <Hero />
      <News 
        news={data.allContentfulNewsItem.edges}
        pages={{...pageContext}}
        isArchive
      />
    </Layout>
)};

export const query = graphql`
  query ($locale: String!, $skip: Int!, $limit: Int!) {
    site {
        siteMetadata{
          languages {
            defaultLangKey
            langs
          }
        }
    }
    allContentfulNewsItem(
        sort: {fields: date, order: DESC}
        filter: {node_locale: {eq: $locale}}
        limit: $limit
        skip: $skip
      ) {
      edges {
        node {
          id
          excerpt
          content {
            json
          }
          node_locale
          featuredImage {
            id
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          title
          slug
          appearsOnMainSlider
          date
        }
      }
    }
  }
`;
export default ArchivePage;


