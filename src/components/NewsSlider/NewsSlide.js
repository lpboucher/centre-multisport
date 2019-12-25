import React from 'react';
import styled from 'styled-components'

import Teaser from '../News/Teaser';

export const StyledNewsItem = styled.div`
  margin: 0 20px;
`;

const NewsSlide = ({background, title, excerpt, isLight}) => {
    return (
        <StyledNewsItem>
            <Teaser 
                background={background}
                title={title}
                excerpt={excerpt}
                light={isLight}
            />
        </StyledNewsItem>
    )
}

export default NewsSlide;