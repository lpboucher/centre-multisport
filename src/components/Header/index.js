import React, { useState } from 'react';

import Navigation from './Navigation';
import OrgName from './OrgName';
import Container from '../../structural/Container';
import Flex from '../../structural/Flex';
import Logo from './Logo';
import Menu from './Menu';
import SelectLanguage from './SelectLanguage';
import Burger from './Burger';
import MobileMenu from './MobileMenu';

const Header = ({langs}) => {
  const [open, setOpen] = useState(false);
  return (
    <Navigation>
      <OrgName small>Centre Multisport Rosemere</OrgName>
      <Container small>
          <Flex justifyBetween alignCenter>
            <Logo />
            <Menu />
            <SelectLanguage langs={langs} />
            <Burger open={open} setOpen={setOpen} />
          </Flex>
      </Container>
      <MobileMenu open={open} setOpen={setOpen} />
    </Navigation>
  )
}

export default Header;