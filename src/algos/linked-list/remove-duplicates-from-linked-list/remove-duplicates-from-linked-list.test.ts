import { LinkedListNode } from '$algos/data-structures/linked-list-node';
import { removeDuplicatesFromLinkedList } from '.';

describe('remove duplicates from linked list', () => {
    test('should work with single node', () => {
        const list = LinkedListNode.fromArray([1]);
        removeDuplicatesFromLinkedList(list);
        expect(list.toArray()).toEqual([1]);
    });

    test('should work when does not contains duplicates', () => {
        const list = LinkedListNode.fromArray([1, 2, 3]);
        removeDuplicatesFromLinkedList(list);
        expect(list.toArray()).toEqual([1, 2, 3]);
    });

    describe('all nodes are duplicates', () => {
        test('should work with two nodes', () => {
            const list = LinkedListNode.fromArray([2, 2]);
            removeDuplicatesFromLinkedList(list);
            expect(list.toArray()).toEqual([2]);
        });

        test('should work with even nodes', () => {
            const list = LinkedListNode.fromArray([1, 1, 1, 1]);
            removeDuplicatesFromLinkedList(list);
            expect(list.toArray()).toEqual([1]);
        });

        test('should work with odd nodes', () => {
            const list = LinkedListNode.fromArray([1, 1, 1, 1, 1]);
            removeDuplicatesFromLinkedList(list);
            expect(list.toArray()).toEqual([1]);
        });
    });

    describe('some nodes are duplicates', () => {
        test('should work with duplicates', () => {
            const list = LinkedListNode.fromArray([1, 2, 2, 3, 3]);
            removeDuplicatesFromLinkedList(list);
            expect(list.toArray()).toEqual([1, 2, 3]);
        });

        test('should work with duplicates at start and at the end', () => {
            const list = LinkedListNode.fromArray([1, 1, 2, 2, 2]);
            removeDuplicatesFromLinkedList(list);
            expect(list.toArray()).toEqual([1, 2]);
        });

        test('should work with gap between duplicates', () => {
            const list = LinkedListNode.fromArray([1, 3, 2, 1, 1]);
            removeDuplicatesFromLinkedList(list);
            expect(list.toArray()).toEqual([1, 3, 2]);
        });
    });
});
