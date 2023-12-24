import { BSTNode } from '$algos/data-structures/BST-node';
import { depthFirstSearchRecursion, depthFirstSearchStack } from '.';

describe('depthFirstSearch tests', () => {
    const tree = {
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
        /**
         *          10
         *         /  \
         *        5    15
         *       / \  /  \
         *      2   4 13  22
         *     /       \
         *    1         14
         */
    };
    describe('stack', () => {
        test('should return undefined if value is not found', () => {
            expect(depthFirstSearchStack(tree, 100)).toBe(undefined);
        });

        test('should return node if value is found', () => {
            expect(depthFirstSearchStack(tree, 10)).toBe(tree);
            expect(depthFirstSearchStack(tree, 15)).toBe(tree.right);
            expect(depthFirstSearchStack(tree, 5)).toBe(tree.left);
            expect(depthFirstSearchStack(tree, 2)).toBe(tree.left.left);
            expect(depthFirstSearchStack(tree, 4)).toBe(tree.left.right);
        });
    });

    describe('recursion', () => {
        test('should return undefined if value is not found', () => {
            expect(depthFirstSearchRecursion(tree, 100)).toBe(undefined);
        });

        test('should return node if value is found', () => {
            expect(depthFirstSearchRecursion(tree, 15)).toBe(tree.right);
            expect(depthFirstSearchRecursion(tree, 5)).toBe(tree.left);
            expect(depthFirstSearchRecursion(tree, 4)).toBe(tree.left.right);
        });
    });
});
