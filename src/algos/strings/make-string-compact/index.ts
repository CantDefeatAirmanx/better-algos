/*
 * Write a function that transforms string into a new string.
 * New string doesn't contain repeating letters but contains number after every letter
 *
 * "" -> ""
 * "a" -> "a"
 * "aaa" -> "a3"
 * "aaabbcbbb" -> "a3b2cb3"
 */

export const makeStringCompact = (string: string) => {
    if (string.length < 2) {
        return string;
    }

    const result: string[] = [];

    let currentChar = string[0];
    let count = 1;

    const getResultItem = (char: string, count: number) => (count > 1 ? `${char}${count}` : char);

    for (let ind = 1; ind < string.length; ind++) {
        const char = string[ind];

        if (char === currentChar) {
            count++;
            if (ind === string.length - 1) {
                result.push(getResultItem(currentChar, count));
            }
        } else {
            result.push(getResultItem(currentChar, count));
            currentChar = char;
            count = 1;
        }
    }

    return result.join('');
};
