/**
 * Task: Find minimal non constructible change of given number array input.
 * Input - positive integers.
 *
 * Ex:
 * [1, 2, 5] -> 4 (we can make from it 1 / 2 / 3 (2 + 1) / 5, but not 4)
 * [1, 1, 2, 3, 11] -> 8
 * [1, 1, 5, 3, 10, 4] -> 25
 */

export const findMinimaNonConstructibleChange = (coins: number[]) => {
    if (coins.length === 0) {
        return 0;
    }

    const sorted = [...coins].sort((first, second) => first - second);
    const maxSum = sorted.reduce((f, s) => f + s, 0);

    for (let num = 1; num <= maxSum; num++) {
        let left = 0;
        let right = sorted.length - 1;

        for (let i = sorted.length - 1; i >= 0; i--) {
            if (sorted[i] <= num) {
                right = i;
                break;
            }
        }

        const rec = (targetNum: number, left: number, right: number): boolean => {
            const leftNum = sorted[left];
            const rightNum = sorted[right];
            const searchNum = sorted.slice(left + 1, right).find((val) => val === targetNum);

            if (leftNum === targetNum || rightNum === targetNum || searchNum !== undefined) {
                return true;
            }

            if (left >= right) {
                return false;
            }

            const newTargetLeft = targetNum - leftNum;
            const newTargetRight = targetNum - rightNum;

            return rec(newTargetLeft, left + 1, right) || rec(newTargetRight, left, right - 1);
        };
        const res = rec(num, left, right);

        if (!res) {
            return num;
        }
    }

    return maxSum + 1;
};

export const findMinimaNonConstructibleChangeMath = (coins: number[]) => {
    if (coins.length === 0) {
        return 0;
    }

    const sorted = [...coins].sort((f, s) => f - s);

    let change = 0;
    for (const coin of sorted) {
        const newChange = change + coin;

        if (coin > change + 1) {
            return change + 1;
        }
        change = newChange;
    }

    return change + 1;
};
