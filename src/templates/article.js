import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../structural/Layout';
import SEO from '../utils/SEO/SEO';
import Hero from '../components/Hero';
import Article from '../components/NewsArticle';

import { schemaBuilder } from '../utils/SEO/schema';

const ArticlePage = ({data, location, pageContext}) => {
  const schema = schemaBuilder(
    'Article',
    `${location.href}`,
    data.contentfulNewsItem.title,
    );
  return (
    <Layout data={data} location={location}>
        <SEO 
            keywords={[data.contentfulNewsItem.title]}
            schema={schema}
          />
        <Hero page={pageContext.template} />
        <Article 
            title={data.contentfulNewsItem.title}
            content={data.contentfulNewsItem.content}
        />
    </Layout>
  )
};

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
