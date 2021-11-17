import init from '../init';

class Trains {
    constructor(initTrains) {
        this.trains = initTrains;
    }

    getTrains() {
        return [...this.trains];
    }

    addTrain(train) {
        this.trains.push(train);
    }

    returnState(train) {
        if (train) {
            const index = this.checkSame(train);

            if (index >= 0) {
                this.trains[index].distance = (
                    parseFloat(this.trains[index].distance) + parseFloat(train.distance)
                ).toString();

                return this.getTrains();
            }

            this.addTrain(train);
        }
        return this.getTrains();
    }

    findTrainIndex(id) {
        return this.trains.findIndex((train) => train.id === id);
    }

    removeTrain(id) {
        const deleteIndex = this.findTrainIndex(id);
        this.trains.splice(deleteIndex, 1);
    }

    checkSame(checkable) {
        return this.trains.findIndex((train) => train.date === checkable.date);
    }

    log() {
        console.log(this.trains);
    }
}

const trainsObj = new Trains(init);
export default trainsObj;

// const trainsObj = (initTrains) => ({
//     trains: initTrains,

//     getTrains() {
//         return [...this.trains];
//     },

//     addTrain(train) {
//         this.trains.push(train);
//     },

//     returnState(train) {
//         if (train) {
//             this.addTrain(train);
//         }
//         return this.getTrains();
//     },

//     findTrainIndex(id) {
//         return this.trains.findIndex((train) => train.id === id);
//     },

//     removeTrain(id) {
//         const deleteIndex = this.findTrainIndex(id);
//         this.trains.splice(deleteIndex, 1);
//     },

//     log() {
//         console.log(this.trains);
//     },
// });

// export default trainsObj;
