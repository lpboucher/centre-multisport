import React from 'react';
import {useIntl} from 'react-intl';
import styled from 'styled-components';
import Ticker from 'react-ticker'

import Text from '../../generic/Text';

import { useAnnouncement } from "../../hooks/use-announcement";

const Announce = styled(Text)`
    margin-right: 25vw;
    margin-left: 25vw;
`

const TickerWrapper = styled.div`
    background-color: ${({isMainPage}) => isMainPage ? 'yellow' : 'transparent'};
`

const Announcement = ({isMainPage}) => {
    const { locale } = useIntl();
    const announcement = useAnnouncement({node_locale: [locale]});
    const announce = announcement.find(item => item.isActive);
    return (
        <TickerWrapper isMainPage={isMainPage}>
            <Ticker bold speed={10} mode="chain">
            {() => 
                <Announce color={isMainPage ? 'primaryDark' : 'primaryLight'} style={{}}bold>{announce.text}</Announce>
            }
            </Ticker>
        </TickerWrapper>
    )
}

export default Announcement;