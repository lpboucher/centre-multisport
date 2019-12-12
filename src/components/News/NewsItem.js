import React from 'react';
import styled from 'styled-components'

import Flex from '../../structural/Flex';
import Teaser from './Teaser';

export const StyledNewsItem = styled.div`
  margin: 0 20px;
`;

const NewsItem = ({background, withPreview}) => {
    return (
        <StyledNewsItem>
            <Flex noWrap>
                <Teaser 
                    background={background}
                    title={'Title'}
                    excerpt={'Lorem Ipsum description of the article'}
                />
                {withPreview &&
                    <p>Here goes an image</p>
                }
            </Flex>
        </StyledNewsItem>
    )
}

export default NewsItem;