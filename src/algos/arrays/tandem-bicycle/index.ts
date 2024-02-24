/**
 * Task: there are two arrays representing cyclist speeds. Cyclists operates tandem bicycle
 * and pair must be formed with 1 guy from first array and another one from second. The task is to
 * calculate maximum (with fastest = true) or mininum (with fastest = false) total speeds of cyclists.
 * Speed is dictated by the fastest rider (3 1 = 3)
 */

export const calculateTandemBicycleTotalSpeed = (
    blueShirtSpeed: number[],
    redShirtSpeeds: number[],
    fastest: boolean = true
) => {
    if (blueShirtSpeed.length !== redShirtSpeeds.length || blueShirtSpeed.length === 0) {
        throw new Error('incorrect input');
    }

    const sortedBlue = [...blueShirtSpeed].sort((f, s) => s - f);
    const sortedRed = [...redShirtSpeeds].sort((f, s) => s - f);

    let result = 0;

    for (let index = 0; index < sortedBlue.length; index++) {
        const blue = sortedBlue[index];
        const red = fastest ? sortedRed[sortedRed.length - 1 - index] : sortedRed[index];
        result += Math.max(blue, red);
    }

    return result;
};
