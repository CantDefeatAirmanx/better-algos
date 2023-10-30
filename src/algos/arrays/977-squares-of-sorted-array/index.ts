const squaresOfSortedArray = (nums: number[]) => {
    const result: (number[] | undefined)[] = [];

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const targetIndex = Math.abs(num);
        const squared = num ** 2;

        if (result[targetIndex] === undefined) {
            result[targetIndex] = [squared];

            continue;
        }

        result[targetIndex]?.push(squared);
    }

    return result.reduce<number[]>((acc, cur) => {
        if (cur === undefined) {
            return acc;
        }
        acc.push(...cur);

        return acc;
    }, []);
};
