import React from 'react'
import styled from 'styled-components'

const StyledArrow = styled.span`
    font-size: ${props => {
        if (props.small) return '18px'
        if (props.large) return '30px'
        return '24px'
    }};
`

const Arrow = ({ ...props }) => {
    return <StyledArrow {...props}>&#10140;</StyledArrow>
}

export default Arrow;