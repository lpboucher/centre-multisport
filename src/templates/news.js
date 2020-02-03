import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../structural/Layout';
import Hero from '../components/Hero';
import News from '../components/News';

const NewsListPage = ({data, location, pageContext}) => {
  const news = data.withCategories ? data.withCategories.edges : data.allCategories.edges;
  return (
    <Layout data={data} location={location}>
      <Hero />
      <News 
        news={news}
        pages={{...pageContext}}
        categories={data.categories.edges}
      />
    </Layout>
)};

export const query = graphql`
  query ($locale: String!, $skip: Int!, $limit: Int!, $category: String, $showAll: Boolean!) {
    site {
        siteMetadata{
          languages {
            defaultLangKey
            langs
          }
        }
    }
    withCategories: allContentfulNewsItem(
        sort: {fields: createdAt, order: ASC}
        filter: {node_locale: {eq: $locale}, category: {name: {eq: $category}}}
        limit: $limit
        skip: $skip
      ) @skip(if: $showAll) {
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
          category {
            name
          }
        }
      }
    }
    allCategories: allContentfulNewsItem(
      sort: {fields: date, order: DESC}
      filter: {node_locale: {eq: $locale}}
      limit: $limit
      skip: $skip
    ) @include(if: $showAll) {
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
        category {
          name
        }
        date
      }
    }
  }
  categories: allContentfulNewsCategory(filter: {node_locale: {eq: $locale}}) {
    edges {
      node {
        name
        node_locale
      }
    }
  }
  }
`;
export default NewsListPage;
