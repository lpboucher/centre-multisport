import React from 'react';

import Container from '../../structural/Container';
import Heading from '../../generic/Heading';
import MobileDisplay from '../../structural/MobileWrapper';

const Map = () => {
    return (
        <MobileDisplay hideMobile>
            <Container background="primaryDark">
                <Heading large color="primaryLight">Here is a map</Heading>
            </Container>
        </MobileDisplay>
    )
}

export default Map;