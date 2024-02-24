export const calculateTandemBicycleTotalSpeed = (
    blueShirtSpeed: number[],
    redShirtSpeeds: number[],
    fastest: boolean = true
) => {
    if (blueShirtSpeed.length !== redShirtSpeeds.length || blueShirtSpeed.length === 0) {
        throw new Error('incorrect input');
    }

    const sortedBlue = blueShirtSpeed.sort((f, s) => s - f);
    const sortedRed = redShirtSpeeds.sort((f, s) => s - f);

    let result = 0;

    for (let index = 0; index < sortedBlue.length; index++) {
        const blue = sortedBlue[index];
        const red = fastest ? sortedRed[index] : sortedRed[sortedRed.length - 1 - index];
        result += Math.min(blue, red);
    }

    return result;
};
