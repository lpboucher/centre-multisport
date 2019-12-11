import React from 'react';
import styled from 'styled-components';

import Input from './Input';
import Label from './Label';

const StyledFormField = styled.div`
    display: flex;
    flex-direction: ${props => {
        if (props.row) return 'row'
        if (props.column) return 'column'
        return 'row'
    }};

    & > ${Label},
    & ${Input} {
        color: ${({dark, theme}) => dark ? theme.primaryLight : theme.primaryDark};
    }

    & ${Input} {
        background-color: ${({dark, theme}) => dark ? theme.primaryDark : theme.primaryLight} !important;
        border-color: ${({dark, theme}) => dark ? theme.primaryLight : theme.primaryDark};
    }
`

const FormField = ({name, label, type, ...props}) => {
    return (
        <StyledFormField {...props}>
            {label &&
                <Label htmlFor={name}>{label}</Label>
            }
            <Input type={type} name={name} />
        </StyledFormField>
    );
};

export default FormField;