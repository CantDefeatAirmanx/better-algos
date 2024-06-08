import { LinkedListNode } from '$algos/data-structures/linked-list-node';
import { findMiddleNode } from '.';

describe('find middle node tests', () => {
    test('should work with single node', () => {
        const head = new LinkedListNode(1);
        expect(findMiddleNode(head)).toBe(head);
    });

    test('should work with odd nodes count', () => {
        const head = new LinkedListNode(1);
        head.next = new LinkedListNode(2);
        const middle = new LinkedListNode(3);
        head.next.next = middle;
        middle.next = new LinkedListNode(4);
        middle.next.next = new LinkedListNode(5);

        expect(findMiddleNode(head)).toBe(middle);
    });

    test('should work with even nodes count', () => {
        const head = new LinkedListNode(1);
        head.next = new LinkedListNode(2);
        const middleRight = new LinkedListNode(3);
        head.next.next = middleRight;
        middleRight.next = new LinkedListNode(4);

        expect(findMiddleNode(head)).toBe(middleRight);
    });
});
