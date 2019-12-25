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
                <Text color={light ? 'primaryDark' : 'primaryLight'}>{excerpt}</Text>
                <Text color={light ? 'primaryDark' : 'primaryLight'}><Arrow large /></Text>
            </Flex>
        </Container>
    );
};

export default Teaser;