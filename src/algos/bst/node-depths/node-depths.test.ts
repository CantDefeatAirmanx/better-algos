import { BSTNode } from '$algos/data-structures/BST-node';
import { calculateNodeDepthsInitial, calculateNodeDepthsRecursion } from '.';

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
        test('should calculate nodes depths', () => {
            expect(calculateNodeDepthsInitial(tree)).toBe(16);
        });
    });

    describe('recursion solution', () => {
        test('should calculate nodes depths', () => {
            expect(calculateNodeDepthsRecursion(tree)).toBe(16);
        });
    });
});
