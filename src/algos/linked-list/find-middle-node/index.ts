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

export const findMiddleNodeOptimized = <GValue>(head: LinkedListNode<GValue>) => {
    let nodesCount = 0;
    let currentNode: LinkedListNode<GValue> | null = head;

    while (currentNode !== null) {
        nodesCount++;
        currentNode = currentNode.next;
    }

    const middleIndex = Math.floor(nodesCount / 2);
    let currentIndex = 0;
    currentNode = head;

    while (currentNode !== null) {
        if (currentIndex === middleIndex) {
            return currentNode;
        }
        currentIndex++;
        currentNode = currentNode.next;
    }
};
