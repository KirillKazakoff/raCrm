import React from 'react';
import FormElement from './FormElement';
import { StyledFormElement } from './StyledFormElement';

export default function FormButton({ content }) {
    const html = (
        <StyledFormElement
            as='button'
            type='submit'
        >
            {content}
        </StyledFormElement>
    );

    return <FormElement Element={html} />;
}
