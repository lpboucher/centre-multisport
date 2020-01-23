import styled from 'styled-components';
import Heading from '../../generic/Heading';

const OrgName = styled(Heading)`
    background: ${({theme}) => theme.primaryLight};
    color: ${({theme}) => theme.primaryDark};
    text-align: center;
    margin: 0;
    padding: 10px 0;
`;

export default OrgName;