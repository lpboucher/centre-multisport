import styled from 'styled-components';

const Input = styled.input`
    width: calc(100% - 20px);
    padding: 10px;
    margin: 10px 0;
    border-radius: 10px;
    border-style: solid;

    &:focus {
        outline: none;
    }
`

export default Input;