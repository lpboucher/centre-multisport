import React, { useState } from 'react';

import Navigation from './Navigation';
import Container from '../../structural/Container';
import Flex from '../../structural/Flex';
import Logo from './Logo';
import Menu from './Menu';
import SelectLanguage from './SelectLanguage';
import Burger from './Burger';
import MobileMenu from './MobileMenu';

const Header = ({langs}) => {
  const locale = langs.find(lang => lang.selected);
  const [open, setOpen] = useState(false);
  return (
    <Navigation>
      <Container>
          <Flex justifyBetween alignCenter>
            <Logo locale={locale}/>
            <Menu locale={locale}/>
            <SelectLanguage langs={langs} />
            <Burger open={open} setOpen={setOpen} />
          </Flex>
      </Container>
      <MobileMenu locale={locale} open={open} setOpen={setOpen} />
    </Navigation>
  )
}

export default Header;