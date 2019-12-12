import React from 'react';

import Container from '../../structural/Container';
import Heading from '../../generic/Heading';

const Overlay = () => {
    return (
        <Container absolute background="transparent" top="40%">
            <Heading color="primaryLight">Le Centre Multisport par excellence sur la rive-nord.</Heading>
        </Container>
    );
};

export default Overlay;