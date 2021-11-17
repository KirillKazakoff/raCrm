import React from 'react';
import * as S from './StyledFormElement';

export default function FormElement({ Element, columnName }) {
    return (
        <S.StyledFormElWrapper columnName={columnName}>
            {columnName ? <div>{columnName}</div> : null}
            {Element}
        </S.StyledFormElWrapper>
    );
}
