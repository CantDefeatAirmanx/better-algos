const someFunction = (options: { first: number; second: string }) => null;

type MyReturnType<GFunction extends (...args: any[]) => any> = GFunction extends (
    ...args: any[]
) => infer Return
    ? Return
    : never;

type Return = MyReturnType<typeof someFunction>;

export {};
