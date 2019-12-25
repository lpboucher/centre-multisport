import React, { Component } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';
import Header from '../components/Header';
import Instafeed from '../components/Instagram';
import Footer from '../components/Footer';
import Helmet from 'react-helmet'
import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n';
import { IntlProvider, addLocaleData } from 'react-intl';
import 'intl';
import { theme } from '../theme';

//check if polyfills required for older browsers
/*import en from 'react-intl/locale-data/en';
import 'intl/locale-data/jsonp/en';
import fr from 'react-intl/locale-data/fr';
import 'intl/locale-data/jsonp/fr';*/

// add concatenated locale data
//addLocaleData([...en, ...fr]);

const GlobalStyle = createGlobalStyle`
${reset}
input{
  background-color: none;
}
body{
  overflow-x:hidden;
}`;

class LayoutWrapper extends Component {
  constructor(props) {
    super(props);
    this.children = this.props.children;
    const data = this.props.data;
    const location = this.props.location;
    const url = location.pathname;
    const { langs, defaultLangKey } = data.site.siteMetadata.languages;
    this.langKey = getCurrentLangKey(langs, defaultLangKey, url);
    this.homeLink = `/${this.langKey}/`;
    this.langsMenu = getLangs(langs, this.langKey, getUrlForLang(this.homeLink, url));
    this.i18nMessages = require(`../data/meta/${this.langKey}`);
  }
  render() {
    return (
      <IntlProvider
        locale={this.langKey}
        messages={this.i18nMessages}
      >
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyle />
              <Helmet
                title="Centre Multisport"
                meta={[
                  { name: 'description', content: 'Sample' },
                  { name: 'keywords', content: 'sample, something' },
                ]}
              />
              <Header langs={this.langsMenu} />
                {this.children}
              <Instafeed />
              <Footer />
            </>
          </ThemeProvider>
      </IntlProvider>
    );
  }
}

export default LayoutWrapper;
