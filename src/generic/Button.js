import styled, { css } from 'styled-components'

const Button = styled.button`
    text-transform: uppercase;
    border-radius: 5px;
    background-color: ${({secondary, theme}) => (secondary ? theme.secondaryHighlight : theme.primaryHighlight)};
    color: ${({theme}) => theme.primaryLight};;
    padding: 10px 15px;
    font-size: ${props => {
        if (props.big) return '20px'
        return '16px'
    }};
    outline: none;
    border: none;
    cursor: pointer;
    margin: 15px auto;
    border: 2px solid ${({secondary, theme}) => (secondary ? theme.secondaryHighlight : theme.primaryHighlight)};
    ${props => {
        return (
            props.inverse &&
            css`
                background-color: #fff;
                color: #a1cdf1;
            `
        )
    }}
`

export default Button