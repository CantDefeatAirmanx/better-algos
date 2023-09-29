const calculateFactorialRec = (n: number): number => {
    if (n < 0) {
        throw new Error('Illigal argument');
    }

    if (n < 2) {
        return 1;
    }

    return n * calculateFactorialRec(n - 1);
};

const calculateFactorial = (n: number) => {
    if (n < 0) {
        throw new Error('Illigal argument');
    }

    let result: number = 1;
    let currentNumber = n;

    while (currentNumber > 0) {
        result *= currentNumber;
        currentNumber--;
    }

    return result;
};
