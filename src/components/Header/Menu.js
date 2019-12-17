import React from "react"
import styled from 'styled-components'
import {useIntl} from 'react-intl';
import { device } from '../../theme';

import Flex from '../../structural/Flex';
import MenuLink from '../../generic/MenuLink';

import { useNavigation } from "../../hooks/use-navigation"

export const StyledMenu = styled.nav`
  margin: 0 auto;
  display: none;

  @media ${device.tablet} {
        display: block;
    }
`;

const Menu = () => {
    const { locale } = useIntl()
    const { items } = useNavigation({node_locale: [locale], type: ["Main"]});
    return (
        <StyledMenu>
            <Flex>
                {items.map(item => 
                    <MenuLink
                        key={item.id}
                        to={`/${locale}${item.link}`}
                    >
                        {item.label}
                    </MenuLink>
                )}
            </Flex>
        </StyledMenu>
    )
}

export default Menu;