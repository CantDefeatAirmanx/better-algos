/**
 *
 * <pre>
 * Есть массив целых чисел. Необходимо для каждого элемента вывести размер его окрестности.
 * Окрестностью является непрерывная последовательность чисел той же четности, в которую входит
 * рассматриваемое число.
 *
 * Пример: [1, 2, 4, 6, 1, 3, 2] -> [1, 3, 3, 3, 2, 2, 1]
 * </pre>
 *
 */

export const findNeighborhoodSequence = (nums: number[]) => {
    if (nums.length === 0) {
        return [];
    }

    let left = 0;
    let right = 1;

    const result = [...nums];

    while (left < nums.length) {
        const isLast = left === nums.length - 1;
        if (isLast) {
            result[left] = 1;

            break;
        }

        const parity = nums[left] % 2;
        let countSequence = 1;

        while (right < nums.length && nums[right] % 2 === parity) {
            countSequence++;
            right++;
        }

        for (let ind = left; ind < left + countSequence; ind++) {
            result[ind] = countSequence;
        }

        left += countSequence;
        right = left + 1;
    }

    return result;
};
