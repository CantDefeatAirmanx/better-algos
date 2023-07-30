const findLongestRepetitiveRange = (array: number[], number: number) => {
    let maxRepetitive = 0;
    let currentrepetitive = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            currentrepetitive++;
            if (i === array.length - 1) {
                maxRepetitive = Math.max(currentrepetitive, maxRepetitive);
            }
            continue;
        }

        maxRepetitive = Math.max(currentrepetitive, maxRepetitive);
        currentrepetitive = 0;
    }

    return maxRepetitive;
};

const arr = [1, 1, 2, 2, 3, 3, 4, 4, 4];

console.log(findLongestRepetitiveRange([1, 1, 2, 2, 3, 3, 4, 4, 4], 2));
console.log(findLongestRepetitiveRange([1, 1, 2, 2, 3, 3, 4, 4, 4, 4], 4));
console.log(findLongestRepetitiveRange([3, 3, 2, 2, 3, 3, 3, 4, 3, 4, 4], 3));
console.log(findLongestRepetitiveRange([], 1));
console.log(findLongestRepetitiveRange([1, 2], 1));
