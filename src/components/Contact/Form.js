import React from 'react';

import FormWrapper from '../../structural/forms/FormWrapper';
import FormField from '../../generic/forms/FormField';
import Button from '../../generic/Button';

const Form = () => {
    return (
        <FormWrapper className="kwes-form">
            <form method="POST" action="https://kwes.io/api/foreign/forms/c4le2SssjnJ5fmKJph3m">
                <FormField 
                    name='name'
                    label='Your Name'
                    type='text'
                    dark
                    column
                />
                <FormField 
                    name='email'
                    label='Your Email'
                    type='text'
                    dark
                    column
                />
                <Button type="submit">Submit</Button>
            </form>
        </FormWrapper>
    );
};

export default Form;