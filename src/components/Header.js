import React from 'react'
import Link from 'gatsby-link'
import SelectLanguage from './SelectLanguage';

import Navigation from '../blocks/Navigation'

const Header = (props) => (
  <Navigation>
    <Navigation.Container>
      <h1>
        <Link to="/">Centre Multisport</Link>
      </h1>
      <SelectLanguage langs={props.langs} />
    </Navigation.Container>
  </Navigation>
)

export default Header;