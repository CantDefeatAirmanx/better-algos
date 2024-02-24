/**
 *  Task: determine if there is a possibility to form a class photo of students
 *  with red and blue shirts. On each column higher student should have higher height.
 *  Every row should contain only one-colored students.
 *
 *  ex:
 *  input: [5,8,1,3,4],[6,9,2,4,5]
 *  output: true
 *
 *
 */

export const canFormClassPhoto = (redShirtsStudents: number[], blueShirtsStudents: number[]) => {
    if (redShirtsStudents.length !== blueShirtsStudents.length) {
        throw new Error('students arrays have different lengths');
    }

    if (redShirtsStudents.length === 0) {
        return false;
    }

    const sortedRed = [...redShirtsStudents].sort((f, s) => f - s);
    const sortedBlue = [...blueShirtsStudents].sort((f, s) => f - s);

    let isBlueHigherFormed = true;
    let isRedHigherFormed = true;

    for (let index = 0; index < sortedRed.length; index++) {
        const red = sortedRed[index];
        const blue = sortedBlue[index];

        if (blue <= red) {
            isBlueHigherFormed = false;
        }

        if (red <= blue) {
            isRedHigherFormed = false;
        }
    }

    return isBlueHigherFormed || isRedHigherFormed;
};

export const canFormClassPhotoOptimized = (redShirtStudents: number[], blueShirtStudents: number[]) => {
    if (redShirtStudents.length !== blueShirtStudents.length) {
        throw new Error('students arrays have different lengths');
    }

    if (redShirtStudents.length === 0) {
        return false;
    }

    const sortedBlue = [...blueShirtStudents].sort((f, s) => s - f);
    const sortedRed = [...redShirtStudents].sort((f, s) => s - f);

    const tallest = Math.max(sortedBlue[0], sortedRed[0]);
    const tallestRow = tallest === sortedBlue[0] ? sortedBlue : sortedRed;
    const lesserRow = tallestRow === sortedBlue ? sortedRed : sortedBlue;

    for (let index = 0; index < tallestRow.length; index++) {
        const tallestHeight = tallestRow[index];
        const lesserHeight = lesserRow[index];

        if (lesserHeight >= tallestHeight) {
            return false;
        }
    }

    return true;
};
