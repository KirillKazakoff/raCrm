/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
import { DateTime } from 'luxon';

export default function sortDescending(notes) {
    const dates = notes.map((note) => ({
        formated: DateTime.fromFormat(note.date, 'dd.MM.yyyy'),
        ...note,
    }));

    const sorted = mySort('formated', dates);
    if (!sorted) return 0;

    const originalSorted = sorted.map((note) => {
        delete note.formated;
        return note;
    });

    return originalSorted;
}

function mySort(prop, arr) {
    const array = arr;

    if (array.length < 1) {
        return 0;
    }
    if (typeof array[0][prop] === 'number') {
        array.sort((a, b) => b[prop] - a[prop]);
    }
    if (typeof array[0][prop] === 'string' || array[0][prop].isLuxonDateTime) {
        array.sort((a, b) => {
            if (b[prop] < a[prop]) return -1;
            if (b[prop] > a[prop]) return 1;
            return 0;
        });
    }
    return array;
}
