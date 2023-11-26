import { once } from '.';

describe('once tests', () => {
    test('should work', () => {
        const testFunction = jest.fn(() => 2);
        const testFunctionOnce = once(testFunction);

        const firstRes = testFunctionOnce();
        const secondRes = testFunctionOnce();
        const thirdRes = testFunctionOnce();

        expect(testFunction).toBeCalledTimes(1);
        expect(firstRes).toBe(2);
        expect(secondRes).toBe(undefined);
        expect(thirdRes).toBe(undefined);
    });
});
