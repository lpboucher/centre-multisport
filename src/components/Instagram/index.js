import React from 'react';
import { FormattedMessage } from 'react-intl';

import Container from '../../structural/Container';
import Heading from '../../generic/Heading';
import InstagramFeed from './Instafeed';

const Instagram = () => (
  <Container background="primaryDark">
    <Heading h3 large center>
      <FormattedMessage id="instagramHeader" />
    </Heading>
    <InstagramFeed />
  </Container>
)

export default Instagram;