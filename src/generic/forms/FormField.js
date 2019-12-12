import React from 'react';
import styled from 'styled-components';

import Input from './Input';
import Label from './Label';
import TextArea from './TextArea';

const StyledFormField = styled.div`
    display: flex;
    flex-direction: ${props => {
        if (props.row) return 'row'
        if (props.column) return 'column'
        return 'row'
    }};

    & > ${Label},
    & ${Input},
    & ${TextArea} {
        color: ${({dark, theme}) => dark ? theme.primaryLight : theme.primaryDark};
    }

    & ${Input},
    & ${TextArea} {
        background-color: ${({dark, theme}) => dark ? theme.primaryDark : theme.primaryLight} !important;
        border-color: ${({dark, theme}) => dark ? theme.primaryLight : theme.primaryDark};
        border-width: 2px;
    }
`

const FormField = ({name, label, placeholder, type, isTextArea, ...props}) => {
    return (
        <StyledFormField {...props}>
            {label &&
                <Label htmlFor={name}>{label}</Label>
            }
            {isTextArea ?
                <TextArea name={name} placeholder={placeholder} />
                :
                <Input type={type} name={name} placeholder={placeholder}/>
            }
        </StyledFormField>
    );
};

export default FormField;