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
    & > div:first-child,
    & > div:last-child {
        width: 320px;
        padding: 10px;
    }

    & > div:first-child {
        order: 1;
    }
    & > div:last-child {
        order: 2;
        @media ${device.tabletMid} {
            order: 3;
        }
    }

    & > div:nth-child(2) {
        width: 100%;
        order: 3;

        @media ${device.tabletMid} {
            width: calc(100% - 2 * (320px));
            padding: 10px;
            order: 2;
        }
    }
`

const Social = () => (
  <Container full background="primaryDark">
    <Heading h3 large center>
      <FormattedMessage id="socialHeader" />
    </Heading>
    <SocialColumns justifyCenter>
        <FacebookFeed query={'https%3A%2F%2Fwww.facebook.com%2FCentre-multisports-de-Rosem%25C3%25A8re-171544226207044%2F&'}/>
        <InstagramFeed />
        <FacebookFeed query={'https%3A%2F%2Fwww.facebook.com%2FCoachsPerspective%2F&'}/>
    </SocialColumns>
  </Container>
)

export default Social;