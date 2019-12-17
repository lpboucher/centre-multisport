import React from 'react';

import Container from '../../structural/Container';
import Flex from '../../structural/Flex';

const Teaser = ({background, title, excerpt}) => {
    return (
        <Container background={background} withRadius fixPad>
            <Flex column justifyBetween>
                <p>{title}</p>
                <p>{excerpt}</p>
                <p>Arrow</p>
            </Flex>
        </Container>
    );
};

export default Teaser;