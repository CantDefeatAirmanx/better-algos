import { LinkedListNode } from '$algos/data-structures/linked-list-node';
import { findMiddleNode, findMiddleNodeOptimized } from '.';

describe('find middle node tests', () => {
    describe('base solution', () => {
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

    describe('optimized solution', () => {
        test('should work with single node', () => {
            const head = new LinkedListNode(1);
            expect(findMiddleNodeOptimized(head)).toBe(head);
        });

        test('should work with odd nodes count', () => {
            const head = new LinkedListNode(1);
            head.next = new LinkedListNode(2);
            const middle = new LinkedListNode(3);
            head.next.next = middle;
            middle.next = new LinkedListNode(4);
            middle.next.next = new LinkedListNode(5);

            expect(findMiddleNodeOptimized(head)).toBe(middle);
        });

        test('should work with even nodes count', () => {
            const head = new LinkedListNode(1);
            head.next = new LinkedListNode(2);
            const middleRight = new LinkedListNode(3);
            head.next.next = middleRight;
            middleRight.next = new LinkedListNode(4);

            expect(findMiddleNodeOptimized(head)).toBe(middleRight);
        });
    });
});
