import React from 'react';
import {useIntl} from 'react-intl';

import Container from '../../structural/Container';
import NewsSlider from './NewsSlider';
import NewsSlide from '../NewsSlider/NewsSlide';

import { useNewsItems } from "../../hooks/use-newsItems"

const News = () => {
    const { locale } = useIntl();
    const news = useNewsItems({node_locale: [locale]});
    const newsItems = news.filter(item => item.appearsOnMainSlider);
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
              }
            },
            {
                breakpoint: 650,
                settings: {
                  slidesToShow: 1,
                }
              }
        ]
    };
    //include in styled component
    const backgrounds = ['primaryLight', 'primaryHighlight', 'secondaryHighlight'];
    return (
        <Container background="primaryDark">
            <NewsSlider {...settings}>
                {newsItems.map((item, index) => 
                    <NewsSlide 
                        key={item.id}
                        background={backgrounds[index]}
                        newsItem={item}
                        isLight={backgrounds[index] === 'primaryLight'}
                    />
                )}
            </NewsSlider>
        </Container>
    )
}

export default News;