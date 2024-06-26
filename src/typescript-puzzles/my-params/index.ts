const someFunction = (options: { first: number; second: string }) => null;

export type MyParameteres<GFunction extends (...args: any[]) => any> = GFunction extends (
    ...args: infer Args
) => any
    ? Args
    : never;

type Args = MyParameteres<typeof someFunction>;

export {};
