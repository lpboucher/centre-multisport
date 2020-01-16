import styled from 'styled-components';

const FormWrapper = styled.div`
    margin-bottom: -37px;
    & form {
        border-right: ${({withSeparator}) => withSeparator ? 'solid 1px white' : ''};
    }

    & .kw-credit a {
        opacity: 0;
    }
`;

export default FormWrapper;