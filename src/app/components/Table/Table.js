import styled from 'styled-components';
import React from 'react';
import Row from './Row';
import Header from './Header';
import sortDescending from '../../utils';

const StyledTable = styled.table`
    border-collapse: collapse;
    border-top: 5px solid #f2f8f8;
    border: 15px solid #f2f8f8;
    display: table;
    table-layout: fixed;
`;

export default function Table({ trains, columns, trainsHook }) {
    const sortedNotes = sortDescending(trains);

    if (!sortedNotes) return null;
    const rows = sortedNotes.map((note) => (
        <Row
            note={note}
            key={note.id}
            id={note.id}
            removeHandler={trainsHook}
        />
    ));

    return (
        <StyledTable>
            <Header columnTitles={Object.values(columns)} />
            <tbody>{rows}</tbody>
        </StyledTable>
    );
}
