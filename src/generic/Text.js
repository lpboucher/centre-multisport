import styled from 'styled-components'

const Text = styled.p`
    font-size: ${props => {
        if (props.small) return '12px'
        if (props.large) return '20px'
        return '16px'
    }};
    font-weight: ${({bold}) => bold ? 'bold' : 'normal'};
    text-transform: ${({uppercase}) => uppercase ? 'uppercase' : 'normal'};
    margin-bottom: ${({noMargin}) => noMargin ? noMargin && '0' : '10px'};
    color: ${({color, theme}) => color ? theme[color] : theme.primaryLight};
    margin-top: ${({noMargin}) => noMargin ? noMargin && '0' : '10px'};
    text-align: ${({center, right}) => {
        if (center) return 'center'
        if (right) return 'right'
        return 'left'
    }};
    padding: ${({withPad}) => withPad ? '10px' : '0'};
    white-space: pre-wrap;

    max-width: 100%;
`

export default Text;