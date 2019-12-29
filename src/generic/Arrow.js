import React from 'react'
import styled from 'styled-components'

const StyledArrow = styled.span`
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    border: ${({theme, color}) => color ? `solid ${theme[color]}` : `solid ${theme.primaryDark}`};
    border-width: ${({width}) => width ? `0 ${width} ${width} 0` : '0 3px 3px 0'};
    display: inline-block;
    padding: ${({length}) => length ? length : '3px'};
`

const Arrow = ({ ...props }) => {
    return <StyledArrow {...props} />
}

export default Arrow;