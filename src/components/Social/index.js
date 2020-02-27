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
    & > div {
        width: 320px;
        padding: 10px;
    }
`

const Social = () => (
  <Container full background="primaryDark">
    <Heading h3 large center>
      <FormattedMessage id="socialHeader" />
    </Heading>
    <SocialColumns justifyCenter>
        <FacebookFeed query={'https%3A%2F%2Fwww.facebook.com%2FCentre-multisports-de-Rosem%25C3%25A8re-171544226207044%2F&'}/>
        <FacebookFeed query={'https%3A%2F%2Fwww.facebook.com%2FCoachsPerspective%2F&'}/>
    </SocialColumns>
  </Container>
)

export default Social;