import styled from 'styled-components';
import Headroom from 'react-headroom';

const Navigation = styled(Headroom)`
    position: absolute;
    width: 100%;

    & > .headroom--unfixed {
        background-color: ${({theme, isMainPage}) => isMainPage ? theme.primaryDark : 'transparent'};
    }

    & > .headroom--pinned {
        background-color: ${({theme}) => theme.primaryDark};
    }
`;

export default Navigation;