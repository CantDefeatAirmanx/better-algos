import { calculateLandPerimeterBruteForce } from '.';

describe('calculateLandPerimeter tests', () => {
    const gridDefaultValue: number[][] = [
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 1, 1],
        [0, 0, 0, 0, 1],
    ];

    let gridCurrentValue: number[][] = JSON.parse(JSON.stringify(gridDefaultValue));

    afterEach(() => {
        gridCurrentValue = JSON.parse(JSON.stringify(gridDefaultValue));
    });

    describe('brute force', () => {
        test('should return zero if there is no island', () => {
            gridCurrentValue.forEach((row, rowInd) => {
                row.forEach((el, colInd) => {
                    gridCurrentValue[rowInd][colInd] = 0;
                });
            });
            expect(calculateLandPerimeterBruteForce(gridCurrentValue)).toBe(0);
        });

        test('should calculate island perimeter', () => {
            expect(calculateLandPerimeterBruteForce(gridCurrentValue)).toBe(14);
        });
    });
});
