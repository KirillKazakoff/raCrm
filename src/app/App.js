/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import styled from 'styled-components';
import Form from './components/Form/Form';
import Table from './components/Table/Table';
import columns from './columns';
import trainsObj from './logic/Trains';

const StyledApp = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export default function App() {
    trainsObj.log();
    const [trains, setTrains] = useState(trainsObj.trains);

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
        </StyledApp>
    );
}
