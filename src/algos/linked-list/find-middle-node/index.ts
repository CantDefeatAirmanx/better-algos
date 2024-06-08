import { LinkedListNode } from '$algos/data-structures/linked-list-node';

export const findMiddleNode = <GValue>(head: LinkedListNode<GValue>) => {
    const nodesArray: LinkedListNode<GValue>[] = [];

    let currentNode: LinkedListNode<GValue> | null = head;
    while (currentNode !== null) {
        nodesArray.push(currentNode);
        currentNode = currentNode.next;
    }

    return nodesArray[Math.round((nodesArray.length - 1) / 2)];
};
