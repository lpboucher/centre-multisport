import styled, { css } from 'styled-components'

const Grid = styled.div`
    display: grid;
    grid-gap: ${({noGap, theme}) => noGap ? '0px' : theme.gridGap};
    grid-template-columns: ${({columns}) => columns ? `repeat(${columns}, 1fr)` : 'repeat(3, 1fr)'};
    grid-auto-rows: ${({rows}) => rows ? rows : '200px'};

    ${({withFeatured}) => { 
        return (
            withFeatured &&
            css`
                & > *:nth-child(4n+1) {
                    grid-row-start: span 2;
                }

                & > *:nth-child(4n+2) {
                    grid-column: 2 / span 2;
                }
            `
        )
    }}
`

export default Grid