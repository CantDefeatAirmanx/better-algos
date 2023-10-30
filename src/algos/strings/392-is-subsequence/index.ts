export const isSubsequence = (s: string, t: string): boolean => {
    if (s.length === 0) {
        return true;
    }

    let checkIndex = 0;

    for (let i = 0; i < t.length; i++) {
        const checkChar = s[checkIndex];
        const curChar = t[i];
        if (curChar === checkChar) {
            checkIndex++;
            if (checkIndex === s.length) {
                return true;
            }
        }
    }

    return false;
};
