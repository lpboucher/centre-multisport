import styled from 'styled-components';
import Link from 'gatsby-link';
import { device } from '../theme';

const MenuLink = styled(Link)`
    font-size: 80%;
    text-transform: uppercase;
    font-weight: bold;
    padding: 0 0.75rem;
    color: ${({color, theme}) => color ? theme[color] : theme['primaryLight']};

    &:hover {
        color: ${({theme}) => theme['primaryHighlight']};;
    }

    @media ${device.laptop} {
        font-size: 100%;
        padding: 0 1rem;
    }
`;

export default MenuLink;