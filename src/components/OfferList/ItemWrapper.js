import styled from 'styled-components'

const ItemWrapper = styled.div`
    width: ${({width}) => width ? width : '100%'};
    text-align: center;
`

export default ItemWrapper