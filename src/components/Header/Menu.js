import React from "react"
import styled from 'styled-components'
import PropTypes from "prop-types"
import { device } from '../../theme';

import Flex from '../../structural/Flex';
import MenuLink from '../../generic/MenuLink';

import { useNavigation } from "../../hooks/use-navigation"
import { filterQuery } from "../../utils/queryFilters"

export const StyledMenu = styled.nav`
  margin: 0 auto;
  display: none;

  @media ${device.tablet} {
        display: block;
    }
`;

const Menu = ({ locale }) => {
    const allNavItems = useNavigation();
    const activeNav = filterQuery(allNavItems, {node_locale: [locale.langKey], type: ["Main"]})
    return (
        <StyledMenu>
            <Flex>
                {activeNav[0].items.map(item => 
                    <MenuLink
                        key={item.id}
                        to={`/${locale.langKey}${item.link}`}
                    >
                        {item.label}
                    </MenuLink>
                )}
            </Flex>
        </StyledMenu>
    )
}

Menu.propTypes = {
  locale: PropTypes.shape({
        langKey: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        selected: PropTypes.bool.isRequired,
    }).isRequired,
}

export default Menu;