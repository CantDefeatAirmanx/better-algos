/*
 * Given an array of functions [f1, f2, f3, ..., fn],
 * return a new function fn that is the function composition of the array of functions.
 *
 * The function composition of [f(x), g(x), h(x)] is fn(x) = f(g(h(x))).
 *
 * The function composition of an empty list of functions is the identity function f(x) = x.
 */

export type SingleArgumentFunction<GType> = (arg: GType) => GType;

export const compose =
    <GType = number>(functions: SingleArgumentFunction<GType>[]) =>
    (arg: GType) => {
        if (functions.length === 0) {
            return;
        }

        let result = undefined;

        for (let index = functions.length - 1; index >= 0; index--) {
            result = functions[index](result ?? arg);
        }

        return result;
    };
