import { LinkedListNode } from '$algos/data-structures/linked-list-node';

export const removeDuplicatesFromLinkedList = <GValue>(
    listNode: LinkedListNode<GValue>
): LinkedListNode<GValue> => {
    const head = listNode;
    const seen = new Set<GValue>([listNode.value]);

    const stack = [listNode.next];
    let prevNode = listNode;

    while (stack.length > 0) {
        const node = stack.pop();
        if (!node) {
            continue;
        }

        const nodeValue = node.value;

        if (seen.has(nodeValue)) {
            prevNode.next = node.next;
        } else {
            seen.add(nodeValue);
            prevNode = node;
        }
        stack.push(node.next);
    }

    return head;
};
