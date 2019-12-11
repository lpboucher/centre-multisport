import styled from 'styled-components';
import { device } from '../theme';

const MobileDisplay = styled.div`
    @media ${device.mobileS} {
            display: ${props => {
            if (props.showMobile) return 'block'
            return 'none'
        }};
    }

    @media ${device.laptop} {
            display: ${props => {
            if (props.hideMobile) return 'block'
            return 'none'
        }};
    }
`

export default MobileDisplay;