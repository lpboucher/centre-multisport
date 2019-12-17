import React from 'react';
import {useIntl} from 'react-intl';

import Jumbotron from './Jumbotron';
import Video from './Video';
import Overlay from './Overlay';
import MobileDisplay from '../../structural/MobileWrapper';
import Spacer from '../../structural/Spacer';

import { useBanner } from "../../hooks/use-banner"

const Hero = ({page}) => {
  const { locale } = useIntl();
  const banners = useBanner({node_locale: [locale]});
  const activeBanner = banners.find(banner => banner.appearsOn.includes(page));
  return (
    <>
    {activeBanner ?
      <>
        <Jumbotron>
          <Video autoplay muted loop controls>
              <source src={"https://zippy.gfycat.com/FearfulSoggyFox.webm"} type="video/webm" />
          </Video>
        </Jumbotron>
        <MobileDisplay hideMobile>
          <Overlay text={activeBanner.tagline}/>
        </MobileDisplay>
      </>
      :
      <Spacer padding={`37px 0`}/>
      }
    </>
  )
}

export default Hero;