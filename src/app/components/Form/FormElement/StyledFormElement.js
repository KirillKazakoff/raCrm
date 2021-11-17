import styled from 'styled-components';

export const StyledFormElement = styled.div`
    padding: 10px;
    border: 2px solid royalblue;
`;

const componentProps = ({ columnName }) => ({
    columnName,
});

export const StyledFormElWrapper = styled.div.attrs(componentProps)`
    width: ${({ columnName }) => (columnName ? '40%' : '20%')};
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
