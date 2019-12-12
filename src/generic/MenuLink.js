import styled from 'styled-components';
import Link from 'gatsby-link';

const MenuLink = styled(Link)`
    text-transform: uppercase;
    padding: 0 1rem;

    &:hover {
        color: red;
    }
`;

export default MenuLink;