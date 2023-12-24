/**
 *  Task: there is number[] array as argument that consists of queries.
 *  Each query executes in a time of that query value
 *  Need to return minimum waiting time to *start execute every queries*
 *
 *  ex: [3,2,5,6] -> in that order all queries executes in 0 + 3 + (3 + 2) + (3 + 2 + 5)
 *  (0 means first executes instantly)
 *
 *  [2,6,3,5] -> 0 + 2 + (2 + 6) + (2 + 6 + 3)
 */

export const findMinimumWaitingTime = (queries: number[]) => {
    if (queries.length < 2) {
        return 0;
    }

    const sortedQueries = [...queries].sort((first, second) => first - second);

    let result = 0;
    let runningSum = 0;

    for (let index = 0; index < sortedQueries.length - 1; index++) {
        const current = sortedQueries[index];
        runningSum += current;
        result += runningSum;
    }

    return result;
};
