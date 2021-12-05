/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import styled from 'styled-components';
import Form from './components/Form/Form';
import Table from './components/Table/Table';
import columns from './columns';
import trainsObj from './logic/Trains';
import Error from './components/Error';

const StyledApp = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export default function App() {
    const [trains, setTrains] = useState(trainsObj.trains);
    const [error, setError] = useState(false);

    const submitH = (adjusted, operation) => {
        if (operation === 'submit') {
            const newTrains = trainsObj.returnState(adjusted);

            setTrains(newTrains);
        }

        if (operation === 'remove') {
            trainsObj.removeTrain(adjusted);
            const newTrains = trainsObj.returnState();

            setTrains(newTrains);
        }

        if (operation === 'error') {
            setError(adjusted);
        } else {
            setError(false);
        }
    };

    return (
        <StyledApp>
            <Form
                submitH={submitH}
                columns={columns}
            />
            <Table
                trainsHook={submitH}
                trains={trains}
                columns={columns}
            />
            <Error error={error} />
        </StyledApp>
    );
}
