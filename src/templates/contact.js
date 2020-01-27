import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../structural/Layout';
import Hero from '../components/Hero';
import Contact from '../components/Contact';
import Map from '../components/Map';

const ContactPage = ({data, location, pageContext}) => (
    <Layout data={data} location={location}>
        <Hero page={pageContext.template} />
        <Contact background="primaryDark"/>
        <Map />
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
