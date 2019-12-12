import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../structural/Layout';
import Spacer from '../structural/Spacer';
import ArticlesList from '../components/ArticlesList';

const NewsPage = ({data, location}) => (
    <Layout data={data} location={location}>
      <Spacer padding={`37px 0`}/>
      <ArticlesList />
    </Layout>
);

export const query = graphql`
  query SiteNews {
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
export default NewsPage;
