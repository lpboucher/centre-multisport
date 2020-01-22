import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import FormWrapper from '../../structural/forms/FormWrapper';
import FormField from '../../generic/forms/FormField';
import Button from '../../generic/Button';

const Form = () => {
    const intl = useIntl();
    return (
        <FormWrapper className="kwes-form" withSeparator>
            <form method="POST" action="https://kwes.io/api/foreign/forms/c4le2SssjnJ5fmKJph3m">
                <FormField 
                    name='name'
                    placeholder={ intl.formatMessage({ id: 'formName' })}
                    type='text'
                    dark
                    column
                />
                <FormField 
                    name='email'
                    placeholder={ intl.formatMessage({ id: 'formEmail' })}
                    type='text'
                    dark
                    column
                />
                <FormField 
                    name='message'
                    placeholder={ intl.formatMessage({ id: 'formMessage' })}
                    dark
                    column
                    isTextArea
                />
                <Button type="submit">
                    <FormattedMessage id="submitButton"/>
                </Button>
            </form>
        </FormWrapper>
    );
};

export default Form;