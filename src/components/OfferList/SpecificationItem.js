import React from 'react';
import styled from 'styled-components';

import Text from '../../generic/Text';

const StyledItem = styled(Text)`
    margin-top: 5px;
    margin-bottom: 5px;
`

const SpecificationItem = ({spec}) => {
    return (
        <StyledItem center>
            {spec}
        </StyledItem>
    );
};

export default SpecificationItem;