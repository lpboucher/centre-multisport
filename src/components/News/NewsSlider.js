import styled from 'styled-components';
import Slider from "react-slick";

const NewsSlider = styled(Slider)`
  padding: 0 20px;
  & .slick-dots li button:before {
    color: white;
    font-size: 18px;
  }

  & .slick-dots  {
    width: calc(100% - 40px);
    bottom: -25px;
  }

  & .slick-dots .slick-active button:before {
    color: white;
  }

  & .slick-track {
    display: flex;
  }

  & .slick-slide {
    height: auto;
  }

  & .slick-slide > div {
    height: 100%;
  }
`;

export default NewsSlider;