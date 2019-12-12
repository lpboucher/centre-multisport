import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../structural/Layout';
import Spacer from '../structural/Spacer';
import Gallery from '../components/Gallery';

const GalleryPage = ({data, location}) => (
    <Layout data={data} location={location}>
      <Spacer padding={`37px 0`}/>
      <Gallery background="primaryDark"/>
    </Layout>
);

export const query = graphql`
  query SiteGallery {
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
export default GalleryPage;
