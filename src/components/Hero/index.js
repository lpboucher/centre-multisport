import React from 'react';

import Jumbotron from './Jumbotron';
import Video from './Video';
import Overlay from './Overlay';
import MobileDisplay from '../../structural/MobileWrapper';

const Hero = () => (
  <>
  <Jumbotron>
    <Video autoplay muted loop controls>
        <source src={"https://zippy.gfycat.com/FearfulSoggyFox.webm"} type="video/webm" />
    </Video>
  </Jumbotron>
  <MobileDisplay hideMobile>
    <Overlay />
  </MobileDisplay>
  </>
)

export default Hero;