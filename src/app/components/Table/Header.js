import React from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

const StyledTh = styled.th`
    font-weight: bold;
    padding: 5px;
    background: #f2f8f8;
    border: none;
    border-bottom: 5px solid #f2f8f8;
`;

export default function Header({ columnTitles }) {
    const theaders = columnTitles.map((title) => (
        <StyledTh key={nanoid()}>{title}</StyledTh>
    ));

    return (
        <thead>
            <tr>
                {theaders}
                <StyledTh>Действия</StyledTh>
            </tr>
        </thead>
    );
}
