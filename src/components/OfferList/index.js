import React from 'react';
import {useIntl} from 'react-intl';

import Container from '../../structural/Container';
import Flex from '../../structural/Flex';
import ActivityItem from './ActivityItem';

import { useActivityItems } from "../../hooks/use-activityItems"

const OfferList = () => {
    const { locale } = useIntl();
    const allItems = useActivityItems({node_locale: [locale]});
    const sortedItems = allItems.sort((a, b) => a.order - b.order);
    return (
    <Container background="primaryLight">
        <Flex justifyAround alignCenter>
            {sortedItems.map(item =>
                <ActivityItem key={item.id} {...item}/>
            )}
        </Flex>
    </Container>
    )
}

export default OfferList;