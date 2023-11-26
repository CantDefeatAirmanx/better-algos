import { map } from '.';

describe('map tests', () => {
    const array = [1, 2, 3, 4, 5, 6];

    test('should create new array', () => {
        expect(map(array, () => {})).not.toBe(array);
    });

    test('should create transformed array', () => {
        expect(map(array, (item) => item ** 2)).toEqual(array.map((el) => el ** 2));
        expect(map(array, (item) => item ** 3)).toEqual(array.map((el) => el ** 3));
        expect(map(array, (item) => String(item))).toEqual(array.map((el) => String(el)));
        expect(map(array, (item) => Boolean(item))).toEqual(array.map((el) => Boolean(el)));
    });

    test('should pass initial array reference in cb', (done) => {
        map(array, (item, index, arr) => {
            if (arr !== array) {
                done.fail();
            }
        });
        done();
    });
});
