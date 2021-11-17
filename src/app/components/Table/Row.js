/* eslint-disable no-unused-expressions */
import React from 'react';
import styled from 'styled-components';
import Controls from './Controls/Controls';
import columns from '../../columns';

const componentProps = (props) => ({
    className: `Td ${props.cls}`,
});

const StyledTd = styled.td.attrs(componentProps)`
    padding: 5px;
    border: none;
    border-bottom: 5px solid #f2f8f8;
    width: ${({ className }) => (className.includes('Controls') ? '200px' : '500px')};
`;

export default function Row({ note, removeHandler, id }) {
    const { date, distance } = note;

    return (
        <tr id={id}>
            <StyledTd cls='Typed'>{date}</StyledTd>
            <StyledTd cls='Typed'>{distance}</StyledTd>
            <StyledTd cls='Controls'>
                <Controls removeHandler={removeHandler} />
            </StyledTd>
        </tr>
    );
}
