import React from 'react';

import Navigation from './Navigation';
import Container from '../../structural/Container';
import Flex from '../../structural/Flex';
import Logo from './Logo';
import SelectLanguage from './SelectLanguage';

const Header = (props) => (
  <Navigation>
    <Container>
        <Flex justifyBetween>
          <Logo />
          <SelectLanguage langs={props.langs} />
        </Flex>
    </Container>
  </Navigation>
)

export default Header;