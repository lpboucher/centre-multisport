import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import Flex from '../../structural/Flex';
import Teaser from './Teaser';

export const StyledNewsItem = styled.div`
  margin: 0 20px;
  height: 100%;

  & > ${Flex} > * {
    width: 50%;
    margin: 20px 0;
    align-self: stretch;
    flex-grow: 1;
  }
`;

const NewsItem = ({background, newsItem, withPreview, isLight}) => {
    return (
        <StyledNewsItem>
            <Flex noWrap minHeight={'200px'}>
                <Teaser 
                    background={background}
                    title={newsItem.title}
                    excerpt={newsItem.excerpt}
                    date={newsItem.date}
                    slug={newsItem.slug}
                    light={isLight}
                    withPreview
                />
                {withPreview &&
                    <Img fluid={newsItem.featuredImage.fluid} />
                }
            </Flex>
        </StyledNewsItem>
    )
}

export default NewsItem;