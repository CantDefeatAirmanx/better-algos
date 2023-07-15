import { MyReturnType } from '$typescript-puzzles/my-return-type';

const testFunction = () => {
    return Promise.resolve(1);
};
export type MyAwaited<T extends Promise<any>> = T extends Promise<infer Awaited> ? Awaited : never;

type WithInBuildUtils = Awaited<ReturnType<typeof testFunction>>;
type WithMyUtils = MyAwaited<MyReturnType<typeof testFunction>>;

export {};
