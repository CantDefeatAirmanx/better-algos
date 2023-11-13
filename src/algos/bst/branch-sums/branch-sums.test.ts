import { BSTNode } from '$algos/data-structures/BST-node';
import { calculateBranchSumsInitial, calculateBranchSumsRecursion } from '.';

describe('calculateBranchSums test', () => {
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

    const sortAsc = (nums: number[]) => nums.sort((f, s) => f - s);

    describe('stack', () => {
        test('should calculate branch sums', () => {
            expect(calculateBranchSumsInitial(tree)).toEqual([18, 19, 52, 47]);
        });
    });

    describe('recursion', () => {
        test('should calculate branch sums', () => {
            expect(calculateBranchSumsRecursion(tree)).toEqual([18, 19, 52, 47]);
        });
    });
});
