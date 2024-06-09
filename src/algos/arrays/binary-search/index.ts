/**
 *  Task: find target number index using binary search. Return -1 if number is not exist
 */

import { NOT_FOUND_RESULT } from './constants';

export const findNumberWithBinarySearch = (numbers: number[], target: number) => {
    let start = 0;
    let end = numbers.length - 1;

    const calculateMiddleIndex = (start: number, end: number) => {
        return Math.ceil((end + start) / 2);
    };

    while (start <= end) {
        const index = calculateMiddleIndex(start, end);
        const number = numbers[index];

        if (number === target) {
            return index;
        } else if (target < number) {
            end = index - 1;
        } else {
            start = index + 1;
        }
    }

    return NOT_FOUND_RESULT;
};
