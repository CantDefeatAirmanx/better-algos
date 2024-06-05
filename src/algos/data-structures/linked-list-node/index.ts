export class LinkedListNode<GValue> {
    value: GValue;
    next: LinkedListNode<GValue> | null;

    constructor(value: GValue, next?: LinkedListNode<GValue> | null) {
        this.value = value;
        this.next = next ?? null;
    }

    public static fromArray<GValue>(items: GValue[]): LinkedListNode<GValue> {
        if (items.length === 0) {
            throw new Error('Input array must not be empty');
        }

        const head = new LinkedListNode(items[0]);
        let tail = head;

        for (let index = 1; index < items.length; index++) {
            const newNode = new LinkedListNode(items[index]);
            tail.next = newNode;
            tail = newNode;
        }

        return head;
    }

    public toArray(): GValue[] {
        const result: GValue[] = [];

        const stack: (LinkedListNode<GValue> | null)[] = [this];
        while (stack.length > 0) {
            const node = stack.pop();
            if (!node) {
                continue;
            }
            result.push(node.value);
            stack.push(node.next);
        }

        return result;
    }
}
