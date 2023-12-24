import { compose } from '.';

describe('compose tests', () => {
    test('should work with empty array', () => {
        expect(compose([])(3)).toBe(undefined);
    });

    test('should work with numbers', () => {
        const fabricSumFunction = (delta: number) => (number: number) => number + delta;
        const fabricMultiplyFunction = (multiplier: number) => (number: number) => number * multiplier;

        const addOne = fabricSumFunction(1);
        const addTwo = fabricSumFunction(2);
        const addThree = fabricSumFunction(3);
        const multiplyByTwo = fabricMultiplyFunction(2);

        expect(compose([addOne, addTwo, multiplyByTwo, addThree])(4)).toBe(17);
        expect(compose([addOne, addTwo, addTwo, addThree])(2)).toBe(10);
    });
});
