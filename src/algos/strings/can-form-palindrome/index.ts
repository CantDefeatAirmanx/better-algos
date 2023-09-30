const canFormPalindrome = (string: string) => {
    const charsMap = new Map<string, number>();

    for (const char of string) {
        if (!charsMap.has(char)) {
            charsMap.set(char, 1);

            continue;
        }

        charsMap.delete(char);
    }

    const oddCharsCount = charsMap.size;

    return oddCharsCount === 0 || oddCharsCount === 1;
};
