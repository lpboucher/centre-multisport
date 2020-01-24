import styled from 'styled-components';

const TextArea = styled.textarea`
    width: calc(100% - 40px);
    min-height: 100px;
    padding: 10px;
    margin: 10px 10px 10px 0;
    border-radius: 10px;
    border-style: solid;
    border-width: 2px;

    &:focus {
        outline: none;
    }

    &::placeholder {
        color: white
    }
`

export default TextArea;