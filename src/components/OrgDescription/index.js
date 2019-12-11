import React from 'react';

import Container from '../../structural/Container';
import Heading from '../../generic/Heading';
import MobileDisplay from '../../structural/MobileWrapper';

const OrgDesc = () => (
    <MobileDisplay showMobile>
        <Container background="primaryDark">
            <Heading color="white">Le Centre Multisport par excellence sur la rive-nord.</Heading>
        </Container>
    </MobileDisplay>
)

export default OrgDesc;