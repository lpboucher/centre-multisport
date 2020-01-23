import styled from 'styled-components'

import Flex from '../../structural/Flex';

const Specifications = styled(Flex)`
    width: 100%;
    height: 100%;
    min-width: 200px;
    position: absolute;
    top: 0;
    left: -50px;
    text-align: center;
    opacity: 0;
    transition: opacity 0.4s;
    border-radius: 10px;
`

export default Specifications;