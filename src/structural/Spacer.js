import styled from 'styled-components';

const Spacer = styled.div`
    width: 100%;
    padding: ${({padding}) => padding ? padding : `25px 15px`};
    background: ${({background, theme}) => background ? theme[background] : theme.primaryDark};
`

export default Spacer;