import styled from 'styled-components';

const FormWrapper = styled.div`
    & form {
        border-right: ${({withSeparator}) => withSeparator ? 'solid 1px white' : ''};
    }
`;

export default FormWrapper;