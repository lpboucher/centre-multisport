import React from 'react';
import PropTypes from 'prop-types';

import MenuLink from '../../generic/MenuLink';

const SelectLanguage = ({langs}) => {
  const inactiveLang = langs.find(lang => !lang.selected);
  return (
  <MenuLink to={inactiveLang.link} key={inactiveLang.langKey}>{inactiveLang.langKey}</MenuLink>
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.array
};

export default SelectLanguage;