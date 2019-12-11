import React from 'react';

import Container from '../../structural/Container';
import NewsSlider from '../News/NewsSlider';
import NewsItem from '../../components/News/NewsItem';

const News = () => {
    const settings = {
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
    };
    return (
        <Container background="primaryDark">
            <NewsSlider {...settings}>
                <NewsItem background="primaryLight"/>
                <NewsItem background="primaryHighlight"/>
                <NewsItem background="secondaryHighlight"/>
            </NewsSlider>
        </Container>
    )
}

export default News;