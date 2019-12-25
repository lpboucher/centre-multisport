import React from 'react';

import Flex from '../../structural/Flex';
import Img from 'gatsby-image';
import ImageWrapper from '../../generic/ImageWrapper';
import Heading from '../../generic/Heading';

const ActivityItem = ({label, icon}) => {
    return (
    <Flex column justifyAround contentCenter>
        <Heading mid h5 color="primaryDark">{label}</Heading>
        <ImageWrapper width='100%' height='auto'>
            <Img fluid={icon.fluid}/>
        </ImageWrapper>
    </Flex>
    )
}

export default ActivityItem;