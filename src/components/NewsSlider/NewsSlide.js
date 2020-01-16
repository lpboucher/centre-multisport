import React from 'react';
import styled from 'styled-components'

import Teaser from '../News/Teaser';

export const StyledNewsItem = styled.div`
  margin: 0 20px;
`;

const NewsSlide = ({background, newsItem, isLight}) => {
    return (
        <StyledNewsItem>
            <Teaser 
                background={background}
                title={newsItem.title}
                excerpt={newsItem.excerpt}
                slug={newsItem.slug}
                light={isLight}
            />
        </StyledNewsItem>
    )
}

export default NewsSlide;