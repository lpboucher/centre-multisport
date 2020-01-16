import React from 'react';

import Text from '../../generic/Text';

const SpecificationItem = ({spec}) => {
    return (
        <Text center>
            {spec}
        </Text>
    );
};

export default SpecificationItem;