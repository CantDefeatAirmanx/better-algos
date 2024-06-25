export type IsPalindrome = (string: string) => boolean;

export const isPalindromeOptimized: IsPalindrome = (string) => {
    for (let idx1 = 0, idx2 = string.length - 1; idx1 < idx2; idx1++, idx2--) {
        if (string[idx1] !== string[idx2]) {
            return false;
        }
    }

    return true;
};

export const isPalindromeOneLine: IsPalindrome = (string) => {
    return string === string.split('').reverse().join('');
};

export const isPalindromeRecursion: IsPalindrome = (string) => {
    if (string.length < 2) {
        return true;
    }

    const recFunction = (firstInd: number, lastInd: number): boolean => {
        const firstChar = string[firstInd];
        const secondChar = string[lastInd];
        const isEqual = firstChar === secondChar;

        const nextFirstInd = firstInd + 1;
        const nextLastInd = lastInd - 1;

        return isEqual && (nextLastInd > nextFirstInd ? recFunction(nextFirstInd, nextLastInd) : true);
    };
    return recFunction(0, string.length - 1);
};
