import React from 'react';

import Container from '../../structural/Container';
import Flex from '../../structural/Flex';
import Text from '../../generic/Text';
import Arrow from '../../generic/Arrow';

const Teaser = ({background, title, excerpt, light, withPreview}) => {
    return (
        <Container background={background} withRadius={!withPreview} fixPad>
            <Flex height="100%" column justifyBetween alignCenter>
                <Text bold uppercase color={light ? 'primaryDark' : 'primaryLight'}>{title}</Text>
                <Text color={light ? 'primaryDark' : 'primaryLight'}>{`${withPreview ? excerpt : `${excerpt.substr(0,10)}...`}`}</Text>
                <Arrow color={light ? 'primaryDark' : 'primaryLight'} length="5px" />
            </Flex>
        </Container>
    );
};

export default Teaser;