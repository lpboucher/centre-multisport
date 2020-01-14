import React from 'react';

import Container from '../../structural/Container';
import Location from './Location';
import MobileDisplay from '../../structural/MobileWrapper';

const Map = () => {
    return (
        <MobileDisplay hideMobile>
            <Container background="primaryDark">
                <Location />
            </Container>
        </MobileDisplay>
    )
}

export default Map;