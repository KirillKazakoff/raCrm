import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const StyledControls = styled.div`
    display: flex;

    column-gap: 10px;
`;

export default function Controls({ removeHandler }) {
    const onRemove = (e) => {
        const closestRow = e.target.closest('tr');
        removeHandler(closestRow.id, 'remove');
    };

    return (
        <StyledControls>
            <Button icon='mode_edit_outline' />
            <Button
                icon='close'
                onClick={onRemove}
            />
        </StyledControls>
    );
}
