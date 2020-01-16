import React from 'react';
import Link from 'gatsby-link';
import {useIntl} from 'react-intl';

import Container from '../../structural/Container';
import Flex from '../../structural/Flex';
import Text from '../../generic/Text';
import Arrow from '../../generic/Arrow';

const Teaser = ({background, title, excerpt, slug, light, withPreview}) => {
    const { locale } = useIntl();
    return (
        <Container background={background} withRadius={!withPreview} fixPad>
            <Flex height="100%" column justifyBetween alignCenter>
                <Text small={!withPreview} bold uppercase color={light ? 'primaryDark' : 'primaryLight'} withPad>{title}</Text>
                <Text color={light ? 'primaryDark' : 'primaryLight'} withPad>{`${withPreview ? excerpt : `${excerpt.substr(0,100)}...`}`}</Text>
                <Link to={`/${locale}/article/${slug}`}>
                    <Arrow side={!withPreview} color={light ? 'primaryDark' : 'primaryLight'} length="7px" width="5px"/>
                </Link>
            </Flex>
        </Container>
    );
};

export default Teaser;