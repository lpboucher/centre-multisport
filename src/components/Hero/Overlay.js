import React from 'react';

import Container from '../../structural/Container';
import Heading from '../../generic/Heading';

const Overlay = ({text}) => {
    return (
        <Container absolute background="transparent" top="40%">
            <Heading color="primaryLight">{text}</Heading>
        </Container>
    );
};

export default Overlay;