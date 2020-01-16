import React from 'react';
import styled from 'styled-components';

import Flex from '../../structural/Flex';
import Img from 'gatsby-image';
import ItemWrapper from './ItemWrapper';
import ImageWrapper from '../../generic/ImageWrapper';
import Heading from '../../generic/Heading';
import Specifications from './Specifications';
import SpecificationItem from './SpecificationItem';

const HoverableContainer = styled(Flex)`
    &:hover ${Specifications} {
        background: green;
        display: block;
    }
`

const ActivityItem = ({label, icon, specifications}) => {
    return (
    <HoverableContainer column justifyAround contentCenter height="200px">
        <ItemWrapper width='100px'>
            <Heading center mid h5 color="primaryDark">{label}</Heading>
            <ImageWrapper width='100%' height='auto' maxW='100px' maxH='100px'>
                <Img fluid={icon.fluid}/>
            </ImageWrapper>
        </ItemWrapper>
        <Specifications>
            {specifications.map(spec => <SpecificationItem key={`label-${spec.label}`} spec={spec.label}/>)}
        </Specifications>
    </HoverableContainer>
    )
}

export default ActivityItem;