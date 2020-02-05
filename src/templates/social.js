import React from 'react';
import { graphql } from 'gatsby';
import { FormattedMessage } from 'react-intl';

import Layout from '../structural/Layout';
import Hero from '../components/Hero';
import Social from '../components/Social';
import LogoLine from '../components/LogoLine';

const SocialPage = ({data, location, pageContext}) => (
    <Layout data={data} location={location}>
        <Hero page={pageContext.template} />
        <Social />
        <LogoLine background="primaryDark" header="partners"/>
    </Layout>
);

export const query = graphql`
  query SiteSocial {
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
export default SocialPage;
