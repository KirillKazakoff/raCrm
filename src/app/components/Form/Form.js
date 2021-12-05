/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
import styled from 'styled-components';
import React from 'react';
import { nanoid } from 'nanoid';

import FormButton from './FormElement/FormButton';
import FormInput from './FormElement/FormInput';

const StyledForm = styled.form`
    display: flex;
    align-items: flex-end;
    column-gap: 10px;
`;

const dataRegExp = /^(0[1-9]|[12][0-9]|3[01])[- /.]/;

export default function Form({ submitH, columns }) {
    const onSubmit = (e) => {
        const { target } = e;
        e.preventDefault();

        const inputs = [...target.elements].filter((elem) => elem.tagName === 'INPUT');
        if (!dataRegExp.test(inputs[0].value)) {
            submitH('date input error', 'error');
            return;
        }

        if (Number.isNaN(parseFloat(inputs[1].value))) {
            submitH('distance input error', 'error');
            return;
        }

        const train = inputs.reduce((total, element) => {
            const inputName = element.name;

            total[inputName] = element.value;
            return total;
        }, {});

        train.id = nanoid();
        submitH(train, 'submit');
    };

    const inputs = Object.entries(columns).map((entrie) => (
        <FormInput
            key={nanoid()}
            columnName={entrie[1]}
            name={entrie[0]}
        />
    ));

    return (
        <StyledForm onSubmit={(e) => onSubmit(e)}>
            {inputs}
            <FormButton content='Ok' />
        </StyledForm>
    );
}
