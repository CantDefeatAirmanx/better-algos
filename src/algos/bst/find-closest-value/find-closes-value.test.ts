import { BSTNode } from '$algos/data-structures/BST-node';
import { findClosestValueInBST, findClosestValueInBSTRecursion } from '.';

describe('findClosestValueInBST test', () => {
    const tree: BSTNode = {
        val: 10,
        left: {
            val: 5,
            right: {
                val: 4,
                left: null,
                right: null,
            },
            left: {
                val: 2,
                right: null,
                left: {
                    left: null,
                    right: null,
                    val: 1,
                },
            },
        },
        right: {
            val: 15,
            left: {
                val: 13,
                left: null,
                right: {
                    val: 14,
                    left: null,
                    right: null,
                },
            },
            right: {
                val: 22,
                left: null,
                right: null,
            },
        },
    };

    /**
     *          10
     *         /  \
     *        5    15
     *       / \  /  \
     *      2   4 13  22
     *     /       \
     *    1         14
     */

    describe('stack solution', () => {
        test('should work with existing value in tree', () => {
            expect(findClosestValueInBST(tree, 5)).toBe(5);
            expect(findClosestValueInBST(tree, 13)).toBe(13);
            expect(findClosestValueInBST(tree, 22)).toBe(22);
        });

        test('should find closest value in tree', () => {
            expect(findClosestValueInBST(tree, 3)).toBe(2);
            expect(findClosestValueInBST(tree, 23)).toBe(22);
            expect(findClosestValueInBST(tree, 0)).toBe(1);
        });

        test('should return first closest if there are multiple in tree', () => {
            expect(findClosestValueInBST(tree, 12)).toBe(13);
        });
    });

    describe('recursion solution', () => {
        test('should work with existing value in tree', () => {
            expect(findClosestValueInBSTRecursion(tree, 5)).toBe(5);
            expect(findClosestValueInBSTRecursion(tree, 13)).toBe(13);
            expect(findClosestValueInBSTRecursion(tree, 22)).toBe(22);
        });

        test('should find closest value in tree', () => {
            expect(findClosestValueInBSTRecursion(tree, 3)).toBe(2);
            expect(findClosestValueInBSTRecursion(tree, 23)).toBe(22);
            expect(findClosestValueInBSTRecursion(tree, 0)).toBe(1);
        });

        test('should return first closest if there are multiple in tree', () => {
            expect(findClosestValueInBSTRecursion(tree, 12)).toBe(13);
        });
    });
});
