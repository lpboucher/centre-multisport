import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { device } from '../../theme';

import MenuLink from '../../generic/MenuLink';

const StyledSelect = styled.button`
  margin-left: auto;
  @media ${device.tablet} {
    margin-left: initial;
  }
`

const SelectLanguage = ({langs}) => {
  const inactiveLang = langs.find(lang => !lang.selected);
  return (
    <StyledSelect>
      <MenuLink to={inactiveLang.link} key={inactiveLang.langKey}>{inactiveLang.langKey}</MenuLink>
    </StyledSelect>
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.array
};

export default SelectLanguage;