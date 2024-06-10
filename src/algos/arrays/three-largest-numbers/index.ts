// O(N * logN) time O(1) space

export type FindThreeLargestNumbers = (numbers: number[]) => [number, number, number];

export const findThreeLargestNumbersSorting: FindThreeLargestNumbers = (numbers) => {
    if (numbers.length < 3) {
        throw new Error('numbers length should be greater or equal 3');
    }

    const [first, second, third] = numbers.sort((f, s) => s - f);

    return [third, second, first];
};
