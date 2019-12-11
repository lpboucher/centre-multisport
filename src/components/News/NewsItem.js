import React from 'react';
import styled from 'styled-components'

import Container from '../../structural/Container';

export const StyledNewsItem = styled.div`
  margin: 0 20px;
`;

const NewsItem = ({background}) => {
    return (
        <StyledNewsItem>
            <Container background={background} withRadius full>
                <p>Title</p>
                <p>Lorem Ipsum description of the article</p>
                <p>Arrow</p>
            </Container>
        </StyledNewsItem>
    )
}

export default NewsItem;