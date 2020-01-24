import React from 'react';
import styled from 'styled-components';

import Container from '../../structural/Container';
import Heading from '../../generic/Heading';

const WithLineH = styled(Heading)`
    line-height: 150%;
`

const Overlay = ({text}) => {
    return (
        <Container absolute background="transparent" top="40%">
            <WithLineH huge color="primaryLight">{text}</WithLineH>
        </Container>
    );
};

export default Overlay;