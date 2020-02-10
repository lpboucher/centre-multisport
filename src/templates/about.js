import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../structural/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import LogoLine from '../components/LogoLine';
import ImageGallery from '../components/NewsArticle/ImageGallery';

const AboutPage = ({data, location, pageContext}) => {
    const { imageBand, seoKeywords, slug } = data.contentfulAbout;
    const keywords = slug !== 'about' ? seoKeywords : null;
    return (
      <Layout keywords={keywords} data={data} location={location}>
          <Hero page={pageContext.template} />
          <About {...data.contentfulAbout}/>
          <LogoLine background="primaryDark" header="partners"/>
          {imageBand && imageBand.length > 0 &&
          <ImageGallery images={imageBand} />
          }
      </Layout>
  );
}

export const query = graphql`
  query ($slug: String!, $locale: String!) {
    site {
        siteMetadata{
          languages {
            defaultLangKey
            langs
          }
        }
    }
    contentfulAbout(slug: {eq: $slug}, node_locale: {eq: $locale}) {
      slug
      title
      content {
        json
      }
      seoKeywords
      imageBand {
        id
        file {
          url
        }
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;
export default AboutPage;
