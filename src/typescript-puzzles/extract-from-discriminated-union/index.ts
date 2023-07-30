type Event =
    | { type: 'click'; event: MouseEvent }
    | { type: 'focus'; event: FocusEvent }
    | { type: 'keydown'; event: KeyboardEvent };

type MyExtract<T, U> = T extends U ? U : never;

type ClickEvent = MyExtract<Event, { type: 'click' }>;

export {};
