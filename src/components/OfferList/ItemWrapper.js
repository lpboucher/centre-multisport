import styled from 'styled-components'

const ItemWrapper = styled.div`
    width: ${({width}) => width ? width : '100%'};
`

export default ItemWrapper