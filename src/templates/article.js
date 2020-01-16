import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../structural/Layout';
import Hero from '../components/Hero';
import Article from '../components/NewsArticle';

const ArticlePage = ({data, location, pageContext}) => (
    <Layout data={data} location={location}>
        <Hero page={pageContext.template} />
        <Article 
            title={data.contentfulNewsItem.title}
            content={data.contentfulNewsItem.content}
        />
    </Layout>
);

export const query = graphql`
  query($slug: String!, $locale: String!) {
    site {
        siteMetadata{
          languages {
            defaultLangKey
            langs
          }
        }
    }
    contentfulNewsItem(slug: {eq: $slug}, node_locale: {eq: $locale}) {
        title
        content {
            json
        }
    }
  }
`
export default ArticlePage;
