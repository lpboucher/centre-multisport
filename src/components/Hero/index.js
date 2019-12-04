import React from 'react';

import Jumbotron from './Jumbotron';
import Video from './Video';

const Hero = () => (
  <Jumbotron>
    <Video autoplay muted loop controls>
        <source src={"https://zippy.gfycat.com/FearfulSoggyFox.webm"} type="video/webm" />
    </Video>
  </Jumbotron>
)

export default Hero;