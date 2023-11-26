/*
 * Task: implement `once` func that accepts cb, and returns a function that would
 * invoke cb only once. Otherwise, returns undefined
 */

export const once = <Callback extends Function, This>(callback: Callback, thisArg?: This) => {
    let isCalled = false;

    return (...args: any[]) => {
        if (!isCalled) {
            isCalled = true;

            return callback.call(thisArg, ...args);
        }

        return undefined;
    };
};
