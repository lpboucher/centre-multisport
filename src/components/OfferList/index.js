import React from 'react';

import Container from '../../structural/Container';
import Flex from '../../structural/Flex';
import ActivityItem from './ActivityItem';

import { useActivityItems } from "../../hooks/use-activityItems"
import { filterQuery } from "../../utils/queryFilters"

const OfferList = ({locale}) => {
    const allItems = useActivityItems();
    const activeItems = filterQuery(allItems, {node_locale: [locale]});
    return (
    <Container background="primaryLight">
        <Flex justifyAround alignCenter>
            {activeItems.map(item =>
                <ActivityItem key={item.id} {...item}/>
            )}
        </Flex>
    </Container>
    )
}

export default OfferList;