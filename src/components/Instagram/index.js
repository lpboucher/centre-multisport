import React from 'react';

import Container from '../../structural/Container';
import Heading from '../../generic/Heading';
import InstagramFeed from './Instafeed';

const Instagram = () => (
  <Container background="primaryDark">
    <Heading h5 center>Suivez-nous sur Instagram @centremultisport</Heading>
    <InstagramFeed />
  </Container>
)

export default Instagram;