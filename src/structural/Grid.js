import styled from 'styled-components'

const Grid = styled.div`
    display: grid;
    grid-gap: 15px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 200px);

    & > *:nth-child(1) {
        grid-row-start: span 2;
    }

    & > *:nth-child(2) {
        grid-column: 2 / span 2;
    }
`

export default Grid