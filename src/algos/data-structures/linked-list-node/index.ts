export class LinkedListNode<GValue> {
    value: GValue;
    next: LinkedListNode<GValue> | null;

    constructor(value: GValue, next?: LinkedListNode<GValue> | null) {
        this.value = value;
        this.next = next ?? null;
    }
}
