import React from 'react';
import { graphql } from 'gatsby';
import { FormattedMessage } from 'react-intl';

import Layout from '../structural/Layout';
import Hero from '../components/Hero';
import Container from '../structural/Container';
import Text from '../generic/Text';

const CalendarPage = ({data, location, pageContext}) => (
    <Layout data={data} location={location}>
        <Hero page={pageContext.template} />
        <Container style={{height: '100vh'}} background="primaryDark">
        <Text>
            <FormattedMessage id="comingSoon" />
        </Text>
    </Container>
    </Layout>
);

export const query = graphql`
  query SiteCalendar {
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
export default CalendarPage;
