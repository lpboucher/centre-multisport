import styled from 'styled-components';
import Link from 'gatsby-link';

const MenuLink = styled(Link)`
    text-transform: uppercase;
    padding: 0 1rem;
    color: ${({color, theme}) => color ? theme[color] : theme['primaryLight']};

    &:hover {
        color: red;
    }
`;

export default MenuLink;