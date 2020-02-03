export const theme = {
    primaryDark: '#1A1B1B',
    primaryLight: '#DCDCDC',
    primaryHighlight: '#4A5E36',
    primaryHover: '#4A5E36',
    secondaryHighlight: '#1f4668',
    additionalHighlight: '#a71b0f',
    borderRadius: '4px',
    containerPadding: {horizontal: '15px', vertical: '25px'},
    gridGap: '15px',
    size: {
      mobileS: '320px',
      mobileM: '375px',
      mobileL: '425px',
      tablet: '768px',
      tabletMid: '896px',
      laptop: '1024px',
      laptopL: '1440px',
      desktop: '2560px'
    }
  }

export const device = {
  mobileS: `(min-width: ${theme.size.mobileS})`,
  mobileM: `(min-width: ${theme.size.mobileM})`,
  mobileL: `(min-width: ${theme.size.mobileL})`,
  tablet: `(min-width: ${theme.size.tablet})`,
  tabletMid: `(min-width: ${theme.size.tabletMid})`,
  laptop: `(min-width: ${theme.size.laptop})`,
  laptopL: `(min-width: ${theme.size.laptopL})`,
  desktop: `(min-width: ${theme.size.desktop})`,
  desktopL: `(min-width: ${theme.size.desktop})`
};