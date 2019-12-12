import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../structural/Layout';
import Hero from '../components/Hero';
import About from '../components/About';

const AboutPage = ({data, location}) => (
    <Layout data={data} location={location}>
        <Hero />
        <About />
    </Layout>
);

export const query = graphql`
  query SiteAbout {
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
export default AboutPage;
