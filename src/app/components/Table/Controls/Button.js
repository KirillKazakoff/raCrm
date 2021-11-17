import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    font-size: 40px;
`;

export default function Button({ icon, onClick }) {
    return (
        <StyledButton
            className='material-icons'
            onClick={onClick}
        >
            {icon}
        </StyledButton>
    );
}
