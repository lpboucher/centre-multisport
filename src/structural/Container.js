import styled from 'styled-components';
import { device } from '../theme';

const Container = styled.div`
    padding-left: ${({theme, full}) => full ? 0 : theme.containerPadding.horizontal};
    padding-right: ${({theme, full}) => full ? 0: theme.containerPadding.horizontal};;
    padding-top: ${props => {
        if (props.fullVertical) return 0
        if (props.small) return '15px'
        return '25px'
    }};
    padding-bottom: ${props => {
        if (props.fullVertical) return 0
        if (props.small) return '15px'
        return '25px'
    }};
    background: ${({background, theme}) => theme[background]};
    position: ${props => {
        if (props.absolute) return 'absolute'
        return 'wrap';
    }};
    top: ${props => {
        if (props.absolute) return props.top
    }};
    border-radius: ${({withRadius, theme}) => {
        if (withRadius) return theme.borderRadius
        return '0'
    }};

    @media ${device.laptop} {
        padding-left: ${props => {
            if (props.full) return 0
            if (props.fixPad) return '15px'
            return 'calc((100vw - 960px) / 2)'
        }};
        padding-right: ${props => {
            if (props.full) return 0
            if (props.fixPad) return '15px'
            return 'calc((100vw - 960px) / 2)'
        }};
    }
    width: 100%;
`

export default Container