import React from 'react';
import styled from 'styled-components';
import {useIntl} from 'react-intl';

import MenuLink from '../../generic/MenuLink';

import { useNavigation } from "../../hooks/use-navigation"

export const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.primaryLight};
  height: 100vh;
  width: 100vw;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
  
  @media (max-width: ${({ theme }) => theme.size.mobileL}) {
    width: 100vw;
  }

  ${MenuLink} {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => theme.primaryDark};
    text-decoration: none;
    transition: color 0.3s linear;
    font-size: 1.5rem;
    text-align: center;

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }
`;

const Menu = ({open}) => {
  const { locale } = useIntl();
  const { items } = useNavigation({node_locale: [locale], type: ["Mobile"]});
  return (
    <StyledMenu open={open}>
      {items.map(item => 
        <MenuLink
            key={item.id}
            to={`/${locale}${item.link}`}
        >
            {item.label}
        </MenuLink>
      )}
    </StyledMenu>
  )
}
export default Menu;