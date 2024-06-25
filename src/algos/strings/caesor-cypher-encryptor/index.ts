const LOWER_CASE_LETTER_REGEX = /[a-z]/;
const UPPER_CASE_LETTER_REGEX = /[A-Z]/;

const LOWER_CASE_FIRST_CHARCODE = 'a'.charCodeAt(0);
const LOWER_CASE_LAST_CHARCODE = 'z'.charCodeAt(0);

const UPPER_CASE_FIRST_CHARCODE = 'A'.charCodeAt(0);
const UPPER_CASE_LAST_CHARCODE = 'Z'.charCodeAt(0);

export const caesorCypherEcryptor = (string: string, key: number) => {
    if (string.length === 0) {
        return string;
    }

    const resolvedKey = key % (LOWER_CASE_LAST_CHARCODE - LOWER_CASE_FIRST_CHARCODE + 1);
    const result = [];

    for (const char of string) {
        const isLowerCase = LOWER_CASE_LETTER_REGEX.test(char);
        const isUpperCase = UPPER_CASE_LETTER_REGEX.test(char);

        if (!isLowerCase && !isUpperCase) {
            result.push(char);

            continue;
        }

        const minCharCode = isLowerCase ? LOWER_CASE_FIRST_CHARCODE : UPPER_CASE_FIRST_CHARCODE;
        const maxCharCode = isLowerCase ? LOWER_CASE_LAST_CHARCODE : UPPER_CASE_LAST_CHARCODE;
        const charCode = char.charCodeAt(0);
        const loweredCharCode = charCode - minCharCode;
        const newCharCode = loweredCharCode + resolvedKey + minCharCode;
        const mod = newCharCode % maxCharCode;
        result.push(
            newCharCode < maxCharCode
                ? String.fromCharCode(newCharCode)
                : String.fromCharCode(minCharCode + mod - 1)
        );
    }

    return result.join('');
};
