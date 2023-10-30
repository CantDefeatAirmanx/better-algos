export const isSubsequence = (subsequence: number[], sequence: number[]) => {
    if (subsequence.length === 0) {
        return true;
    }

    let checkIndex = 0;

    for (let i = 0; i < sequence.length; i++) {
        const curNum = sequence[i];
        const checkNum = subsequence[checkIndex];

        if (curNum === checkNum) {
            checkIndex++;
            if (checkIndex === subsequence.length) {
                return true;
            }
        }
    }

    return false;
};

export const isSubsequence2 = (subS: number[], seq: number[]) => {
    let subSeqInd = 0;
    let seqInd = 0;

    while (subSeqInd < subS.length && seqInd < seq.length) {
        if (subS[subSeqInd] === seq[seqInd]) {
            subSeqInd++;
        }
        seqInd++;
    }

    return subSeqInd === subS.length;
};
