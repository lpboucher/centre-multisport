import React from 'react';
import {useIntl} from 'react-intl';

import Container from '../../structural/Container';
import Flex from '../../structural/Flex';
import ActivityItem from './ActivityItem';

import { useActivityItems } from "../../hooks/use-activityItems"

const OfferList = () => {
    const { locale } = useIntl();
    const allItems = useActivityItems({node_locale: [locale]});
    return (
    <Container background="primaryLight">
        <Flex height="150px" justifyAround alignCenter>
            {allItems.map(item =>
                <ActivityItem key={item.id} {...item}/>
            )}
        </Flex>
    </Container>
    )
}

export default OfferList;