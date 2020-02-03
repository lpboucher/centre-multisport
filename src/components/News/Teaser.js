import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import { FormattedDate, useIntl } from 'react-intl';

import Container from '../../structural/Container';
import Flex from '../../structural/Flex';
import Heading from '../../generic/Heading';
import Text from '../../generic/Text';
import Arrow from '../../generic/Arrow';

const Teaser = ({background, title, excerpt, date, slug, light, withPreview, isArchive}) => {
    const { locale } = useIntl();
    const printedExcerpt = isArchive ? excerpt.substr(0,25) : excerpt;
    return (
        <Container small={!withPreview || isArchive} background={background} withRadius={!withPreview} fixPad withBorder={!background}>
            <Flex height="100%" column justifyBetween alignCenter>
                <Heading h3 spaced noMargin bold withPad={withPreview} color={light ? 'primaryDark' : 'primaryLight'}>{title}</Heading>
                <Text color={light ? 'primaryDark' : 'primaryLight'} withPad={withPreview}>
                    <FormattedDate value={date} day="numeric" month="long" year="numeric"/>
                    {` -- ${withPreview ? printedExcerpt : `${excerpt.substr(0,100)}...`}`}
                </Text>
                <Link to={`/${locale}/article/${slug}`}>
                    <Arrow side={!withPreview} color={light ? 'primaryDark' : 'primaryLight'} length="7px" width="5px"/>
                </Link>
            </Flex>
        </Container>
    );
};

export default Teaser;