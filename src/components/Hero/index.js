import React from 'react';
import {useIntl} from 'react-intl';

import Jumbotron from './Jumbotron';
import Video from './Video';
import Overlay from './Overlay';
import MobileDisplay from '../../structural/MobileWrapper';
import Spacer from '../../structural/Spacer';

import { useBanner } from "../../hooks/use-banner";

const Hero = ({page}) => {
  const { locale } = useIntl();
  const banners = useBanner({node_locale: [locale]});
  const activeBanner = banners.find(banner => banner.appearsOn.includes(page));
  return (
    <>
    {activeBanner ?
      <>
        <Jumbotron background="primaryDark">
          <Video autoPlay muted loop>
              <source src={activeBanner.content.file.url} type="video/mp4" />
          </Video>
        </Jumbotron>
        <MobileDisplay hideMobile>
          <Overlay text={activeBanner.tagline}/>
        </MobileDisplay>
      </>
      :
      <Spacer padding={`70px 0`}/>
      }
    </>
  )
}

export default Hero;