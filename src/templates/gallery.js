import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../structural/Layout';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';

const GalleryPage = ({data, location, pageContext}) => {
  return (
    <Layout data={data} location={location}>
      <Hero page={pageContext.template} />
      <Gallery 
        type="gallery"
        background="primaryDark"
        albums={pageContext.albums}
        context={pageContext}
      />
    </Layout>
  );
}

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
