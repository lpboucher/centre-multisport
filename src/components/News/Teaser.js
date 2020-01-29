import React from 'react';
import Link from 'gatsby-link';
import { FormattedDate } from 'react-intl';
import {useIntl} from 'react-intl';

import Container from '../../structural/Container';
import Flex from '../../structural/Flex';
import Heading from '../../generic/Heading';
import Text from '../../generic/Text';
import Arrow from '../../generic/Arrow';

const Teaser = ({background, title, excerpt, date, slug, light, withPreview}) => {
    const { locale } = useIntl();
    return (
        <Container small={!withPreview} background={background} withRadius={!withPreview} fixPad>
            <Flex height="100%" column justifyBetween alignCenter>
                <Heading h3 spaced noMargin bold withPad={withPreview} color={light ? 'primaryDark' : 'primaryLight'}>{title}</Heading>
                <Text color={light ? 'primaryDark' : 'primaryLight'} withPad={withPreview}>
                <FormattedDate value={date} day="numeric" month="long" year="numeric"/>{` -- ${withPreview ? excerpt : `${excerpt.substr(0,100)}...`}`}
                </Text>
                <Link to={`/${locale}/article/${slug}`}>
                    <Arrow side={!withPreview} color={light ? 'primaryDark' : 'primaryLight'} length="7px" width="5px"/>
                </Link>
            </Flex>
        </Container>
    );
};

export default Teaser;