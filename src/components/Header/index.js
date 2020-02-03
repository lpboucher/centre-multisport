import React, { useState } from 'react';
import styled from 'styled-components';

import Navigation from './Navigation';
import OrgName from './OrgName';
import Container from '../../structural/Container';
import Flex from '../../structural/Flex';
import Logo from './Logo';
import Menu from './Menu';
import SocialIcon from './SocialIcon';
import SelectLanguage from './SelectLanguage';
import Burger from './Burger';
import MobileMenu from './MobileMenu';
import Announcement from '../Announcement';
import Button from '../../generic/Button';

import FB from '../../assets/image/iconmonstr-facebook-5.svg';
import IG from '../../assets/image/iconmonstr-instagram-15.svg';

const MenuWrapper = styled(Container)`
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 1105px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`

const Header = ({langs, isMainPage}) => {
  const [open, setOpen] = useState(false);
  return (
    <Navigation isMainPage={isMainPage}>
      <OrgName>Centre Multisports Rosemère</OrgName>
      <MenuWrapper small full>
          <Flex justifyBetween alignCenter>
            <Logo />
            <Menu />
            <SelectLanguage langs={langs} />
            <Flex>
              <SocialIcon link="http://www.facebook.com" width="30px">
                <FB width={'30px'} fill={'#DCDCDC'}/>
              </SocialIcon>
              <SocialIcon link="http://www.facebook.com" width="30px">
                <IG width={'30px'} fill={'#DCDCDC'}/>
              </SocialIcon>
            </Flex>
            <Burger open={open} setOpen={setOpen} />
          </Flex>
      </MenuWrapper>
      <Announcement isMainPage={isMainPage} />
      <MobileMenu open={open} setOpen={setOpen} />
    </Navigation>
  )
}

export default Header;