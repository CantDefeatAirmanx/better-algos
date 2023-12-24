/**
 * You are given row x col grid representing a map where grid[i][j] = 1
 * represents land and grid[i][j] = 0 represents water.
 *
 * Grid cells are connected horizontally/vertically (not diagonally).
 * The grid is completely surrounded by water, and there is exactly one island
 * (i.e., one or more connected land cells).
 *
 * The island doesn't have "lakes", meaning the water inside isn't connected
 * to the water around the island. One cell is a square with side length 1.
 * The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.
 *
 * Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
 * Output: 16
 *
 */

export const calculateLandPerimeterBruteForce = (grid: number[][]) => {
    let perimeter = 0;

    for (let rowInd = 0; rowInd < grid.length; rowInd++) {
        const row = grid[rowInd];

        for (let colInd = 0; colInd < row.length; colInd++) {
            const el = grid[rowInd][colInd];

            if (el > 0) {
                const upperElement = grid[rowInd]?.[colInd + 1] ?? 0;
                const lowerElement = grid[rowInd]?.[colInd - 1] ?? 0;
                const leftElement = grid[rowInd - 1]?.[colInd] ?? 0;
                const rightElement = grid[rowInd + 1]?.[colInd] ?? 0;

                perimeter += 4 - upperElement - lowerElement - leftElement - rightElement;
            }
        }
    }

    return perimeter;
};
