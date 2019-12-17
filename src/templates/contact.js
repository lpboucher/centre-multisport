import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet'

import Layout from '../structural/Layout';
import Hero from '../components/Hero';
import Contact from '../components/Contact';

const ContactPage = ({data, location, pageContext}) => (
    <Layout data={data} location={location}>
        <Helmet><script src="https://kwes.io/js/kwes.js"></script></Helmet>
        <Hero page={pageContext.template} />
        <Contact />
    </Layout>
);

export const query = graphql`
  query SiteContact {
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
export default ContactPage;
