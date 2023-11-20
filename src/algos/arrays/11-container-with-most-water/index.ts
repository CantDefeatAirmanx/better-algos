/** You are given an integer array height of length n.
 *  There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 *
 *  Find two lines that together with the x-axis form a container, such that the container contains the most water.
 *
 *  Return the maximum amount of water a container can store.
 *
 */

export const findMaximumWaterAmountBruteForce = (highs: number[]) => {
    if (highs.length === 0 || highs.length === 1) {
        return 0;
    }

    let maxVolume = 0;

    for (let leftInd = 0; leftInd < highs.length - 1; leftInd++) {
        const leftHigh = highs[leftInd];

        for (let rightInd = leftInd + 1; rightInd < highs.length; rightInd++) {
            const rightHihgh = highs[rightInd];
            const distance = rightInd - leftInd;
            const volume = distance * Math.min(leftHigh, rightHihgh);

            if (volume > maxVolume) {
                maxVolume = volume;
            }
        }
    }

    return maxVolume;
};

export const findMaximumWaterAmountTwoPointers = (highs: number[]) => {
    if (highs.length === 0 || highs.length === 1) {
        return 0;
    }

    let leftIndex = 0;
    let rightIndex = highs.length - 1;
    let maxVolume = 0;

    while (leftIndex < rightIndex) {
        const leftHigh = highs[leftIndex];
        const rightHigh = highs[rightIndex];
        const distance = rightIndex - leftIndex;
        const volume = distance * Math.min(leftHigh, rightHigh);

        if (volume > maxVolume) {
            maxVolume = volume;
        }

        if (rightHigh > leftHigh) {
            leftIndex++;
        } else {
            rightIndex--;
        }
    }

    return maxVolume;
};
