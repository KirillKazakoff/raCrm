import React, { useState } from 'react';
import { StyledFormElement } from './StyledFormElement';
import FormElement from './FormElement';

export default function FormInput({ columnName, name }) {
    const [fieldValue, setFieldValue] = useState('');
    const inputHandler = (e) => setFieldValue(e.target.value);

    const html = (
        <StyledFormElement
            as='input'
            value={fieldValue}
            onChange={inputHandler}
            name={name}
            required
        />
    );

    return (
        <FormElement
            Element={html}
            columnName={columnName}
        />
    );
}
