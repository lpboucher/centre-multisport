import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { device } from '../../theme';

import Container from '../../structural/Container';
import Flex from '../../structural/Flex';
import Heading from '../../generic/Heading';
import InstagramFeed from './Instafeed';
import FacebookFeed from './Facebookfeed';

const SocialColumns = styled(Flex)`
    & > * {
        width: 300px;
        padding: 10px;
        margin: 0 auto;

        @media ${device.tablet} {
            width: 350px;
        }

        @media ${device.tabletMid} {
            width: 400px;
        }

        @media ${device.laptop} {
            width: 320px;
        }
    }
`

const Social = () => (
  <Container background="primaryDark">
    <Heading h3 large center>
      <FormattedMessage id="socialHeader" />
    </Heading>
    <SocialColumns justifyCenter>
        <InstagramFeed />
        <FacebookFeed />
        <FacebookFeed />
    </SocialColumns>
  </Container>
)

export default Social;