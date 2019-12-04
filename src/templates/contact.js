import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet'

import Layout from '../structural/Layout';
import Form from '../components/Contact/Form';

const ContactPage = ({data, location}) => (
    <Layout data={data} location={location}>
        <Helmet><script src="https://kwes.io/js/kwes.js"></script></Helmet>
        <Form />
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
