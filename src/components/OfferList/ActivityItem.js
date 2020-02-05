import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { useIntl } from 'react-intl';

import Flex from '../../structural/Flex';
import Img from 'gatsby-image';
import ItemWrapper from './ItemWrapper';
import ImageWrapper from '../../generic/ImageWrapper';
import Heading from '../../generic/Heading';
import Specifications from './Specifications';
import SpecificationItem from './SpecificationItem';

const HoverableContainer = styled(Flex)`
    &:hover ${Specifications} {
        background: ${({theme}) => theme.primaryHighlight};
        opacity: 1;
    }
`

const ActivityItem = ({label, icon, specifications}) => {
    const { locale } = useIntl();
    const link = label === "Soccer" || label === "Football" ? 'calendar' : 'xollox';
    return (
    <HoverableContainer column justifyAround contentCenter height="150px">
        <ItemWrapper width='100px'>
            <Heading center small h3 color="primaryDark">{label}</Heading>
            <ImageWrapper width='100px' height='100px' maxW='100px' maxH='100px'>
                <Img fluid={icon.fluid}/>
            </ImageWrapper>
        </ItemWrapper>
        <Link to={`/${locale}/${link}`}>
            <Specifications justifyCenter alignCenter column>
                {specifications.map(spec => <SpecificationItem key={`label-${spec.label}`} spec={spec.label}/>)}
            </Specifications>
        </Link>
    </HoverableContainer>
    )
}

export default ActivityItem;