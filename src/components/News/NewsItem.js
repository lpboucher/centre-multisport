import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import Flex from '../../structural/Flex';
import Teaser from './Teaser';

export const StyledNewsItem = styled.div`
  margin: 0 20px;

  & > ${Flex} {
    min-height: 200px;
  }

  & > ${Flex} > * {
    width: 50%;
    margin: 20px 0;
    align-self: stretch;
  }
`;

const NewsItem = ({background, title, excerpt, featured, withPreview}) => {
    return (
        <StyledNewsItem>
            <Flex noWrap>
                <Teaser 
                    background={background}
                    title={title}
                    excerpt={excerpt}
                />
                {withPreview &&
                    <Img fluid={featured.fluid} />
                }
            </Flex>
        </StyledNewsItem>
    )
}

export default NewsItem;