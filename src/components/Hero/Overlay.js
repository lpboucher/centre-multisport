import React from 'react';
import styled from 'styled-components';

import Container from '../../structural/Container';
import Heading from '../../generic/Heading';

import { device } from '../../theme';

const WithLineH = styled(Heading)`
    line-height: 150%;
`
 const WithPadding = styled(Container)`
    @media ${device.laptop} {
        padding:60px 80px;
    }
`

const Overlay = ({text}) => {
    return (
        <WithPadding absolute fixPad background="transparent" top="40%">
            <WithLineH huge color="primaryLight">{text}</WithLineH>
        </WithPadding>
    );
};

export default Overlay;