import React from 'react'
import styled, { css } from 'styled-components'

const baseStyle = css`
    margin-bottom: ${props => props.noMargin && '0'};
    color: ${({color, theme}) => color ? theme[color] : theme.primaryLight};
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: ${props => {
        if (props.small) return '80%'
        else if (props.mid) return '120%'
        else if (props.large) return '150%'
        else if (props.xlarge) return '200%'
        else if (props.huge) return '300%'
        return '100%'
    }};
    margin-top: 0;
    text-align: ${props => {
        if (props.center) return 'center'
        if (props.right) return 'right'
        return 'left'
    }};
    text-transform: uppercase;
    max-width: 100%;
`

const HeadingOne = styled.h1`
    font-weight: bold;
    margin-bottom: 25px;
    ${baseStyle};
    @media (max-width: 480px) {
        font-size: 40px;
    }
`

const HeadingTwo = styled.h2`
    font-weight: bold;
    margin-bottom: 20px;
    ${baseStyle};
`

const HeadingThree = styled.h3`
    font-weight: bold;
    margin-bottom: 15px;
    ${baseStyle};
`

const HeadingFour = styled.h4`
    font-weight: bold;
    margin-bottom: 10px;
    ${baseStyle};
`

const HeadingFive = styled.h5`
    font-weight: bold;
    margin-bottom: 5px;
    ${baseStyle};
`

const Heading = ({ h2, h3, h4, h5, noMargin, right, center, ...props }) => {
    if (h2) return <HeadingTwo noMargin={noMargin} right={right} center={center} {...props} />
    if (h3) return <HeadingThree noMargin={noMargin} right={right} center={center} {...props} />
    if (h4) return <HeadingFour noMargin={noMargin} right={right} center={center} {...props} />
    if (h5) return <HeadingFive noMargin={noMargin} right={right} center={center} {...props} />
    return <HeadingOne noMargin={noMargin} right={right} center={center} {...props} />
}

export default Heading