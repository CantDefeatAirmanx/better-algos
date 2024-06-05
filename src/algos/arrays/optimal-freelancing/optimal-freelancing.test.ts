import { calculateMaximumProfit } from '.';

describe('calculateMaximumProfit tests', () => {
    test('should work with empty input array', () => {
        expect(calculateMaximumProfit([])).toBe(0);
    });

    test('should calculate profit without jobs conflicts', () => {
        const data = [
            { deadline: 1, payment: 1 },
            { deadline: 2, payment: 2 },
            { deadline: 3, payment: 3 },
            { deadline: 4, payment: 4 },
            { deadline: 5, payment: 5 },
            { deadline: 6, payment: 6 },
        ];
        expect(calculateMaximumProfit(data)).toBe(data.reduce((acc, cur) => acc + cur.payment, 0));
    });

    test('should calculate profit with jobs conflicts', () => {
        const data = [
            { deadline: 4, payment: 4 },
            { deadline: 2, payment: 2 },
            { deadline: 1, payment: 1 },
            { deadline: 5, payment: 5 },
            { deadline: 2, payment: 3 },
            { deadline: 5, payment: 6 },
        ];
        expect(calculateMaximumProfit(data)).toBe(14);
    });
});
