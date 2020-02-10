import styled from 'styled-components';
import Slider from "react-slick";

const NewsSlider = styled(Slider)`
  & .slick-dots li button:before {
    color: white;
    font-size: 18px;
  }

  & .slick-dots  {
    width: 100%;
    bottom: -40px;
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

  & .slick-slide > div,
  & .slick-slide > div > div,
  & .slick-slide > div > div > div {
    height: 100%;
  }
`;

export default NewsSlider;