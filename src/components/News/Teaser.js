import React from 'react';

import Container from '../../structural/Container';

const Teaser = ({background, title, excerpt}) => {
    return (
        <Container background={background} withRadius fixPad>
            <p>{title}</p>
            <p>{excerpt}</p>
            <p>Arrow</p>
        </Container>
    );
};

export default Teaser;