// O(N * logN) time O(1) space

export type FindThreeLargestNumbers = (numbers: number[]) => [number, number, number];

export const findThreeLargestNumbersSorting: FindThreeLargestNumbers = (numbers) => {
    if (numbers.length < 3) {
        throw new Error('numbers length should be greater or equal 3');
    }

    const [first, second, third] = numbers.sort((f, s) => s - f);

    return [third, second, first];
};

// O(N * M) time O(1) space
export const findThreeLargestNumbersOptimized: FindThreeLargestNumbers = (numbers) => {
    if (numbers.length < 3) {
        throw new Error('numbers length should be greater or equal 3');
    }

    const result: [number, number, number] = [-Infinity, -Infinity, -Infinity];

    const appendNewVal = (number: number, startIndex: number) => {
        for (let index = 0; index < startIndex; index++) {
            result[index] = result[index + 1];
        }
        result[startIndex] = number;
    };

    for (let index = 0; index < numbers.length; index++) {
        const number = numbers[index];

        let startIndex: number | null = null;
        switch (true) {
            case number > result[2]:
                startIndex = 2;
                break;
            case number > result[1]:
                startIndex = 1;
                break;
            case number > result[0]:
                startIndex = 0;
                break;
            default:
                break;
        }

        if (startIndex !== null) {
            appendNewVal(number, startIndex);
        }
    }

    return result as [number, number, number];
};
