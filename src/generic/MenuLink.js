import styled from 'styled-components';
import Link from 'gatsby-link';

const MenuLink = styled(Link)`
    text-transform: uppercase;
    font-weight: bold;
    padding: 0 1rem;
    color: ${({color, theme}) => color ? theme[color] : theme['primaryLight']};

    &:hover {
        color: ${({theme}) => theme['primaryHighlight']};;
    }
`;

export default MenuLink;