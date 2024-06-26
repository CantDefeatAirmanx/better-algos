/**
 *  Task: write a function that would accept string and shortens it with
 *  run length encoding. It is doing that by appends chars count before actual char
 *  and all consecutive chars shrink into pair 'number + char'
 *
 *  ex: aaabbbbddf -> 3a4b2d1f
 */

export const runLengthEncoding = (string: string) => {
    if (string.length < 1) {
        return string;
    }

    const result: string[] = [];

    let currentRepeated = 1;
    for (let index = 0; index < string.length; index++) {
        const char = string[index];
        const nextChar = string[index + 1];

        if (char !== nextChar || currentRepeated === 9) {
            result.push(currentRepeated.toString(), char);
            currentRepeated = 1;
            continue;
        }

        currentRepeated++;
    }

    return result.join('');
};
