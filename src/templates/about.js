import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../structural/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import LogoLine from '../components/LogoLine';

const AboutPage = ({data, location, pageContext}) => (
    <Layout data={data} location={location}>
        <Hero page={pageContext.template} />
        <About />
        <LogoLine background="primaryDark" header="partners"/>
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
