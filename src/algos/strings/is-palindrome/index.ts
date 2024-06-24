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
