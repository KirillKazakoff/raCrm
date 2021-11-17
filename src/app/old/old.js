/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import styled from 'styled-components';
import Form from '../components/Form/Form';
import Table from '../components/Table/Table';
// import defaultTrains from './trains';
import columns from '../columns';
// import trainsObj from './logic/Trains';
import Trains from '../logic/Trains';

const StyledApp = styled.div`
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const defaultTrains = 'init';

export default function App() {
    // const trainz = trainsObj(defaultTrains);
    const trainz = new Trains(defaultTrains);
    trainz.log();
    const [trains, setTrains] = useState(trainz.trai);

    const submitH = (adjusted, operation) => {
        if (operation === 'submit') {
            const newTrains = trainz.returnState(adjusted);

            setTrains((prevTrains) => ({
                ...prevTrains,
                trains: newTrains,
            }));
        }

        if (operation === 'remove') {
            trainz.removeTrain(adjusted);
            const newTrains = trainz.returnState();

            setTrains((prevTrains) => ({
                ...prevTrains,
                trains: newTrains,
            }));
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
                notesObj={trains}
                columns={columns}
            />
        </StyledApp>
    );
}
