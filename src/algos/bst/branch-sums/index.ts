/**
 * Write function that returns array of sums node values of BST branches.
 * Order of branches sums does not matter but be better if it has left-to-right structure.
 */

import { BSTNode } from '$algos/data-structures/BST-node';

const isLeaf = (node: BSTNode) => {
    return node.left === null && node.right === null;
};

export const calculateBranchSumsInitial = (node: BSTNode) => {
    const result: number[] = [];

    const stack = [node];
    const hasTurnedNodesWithRight = new Set<BSTNode>();
    let currentBranchSum = 0;

    while (stack.length > 0) {
        const node = stack[stack.length - 1];

        if (isLeaf(node)) {
            currentBranchSum += node.val;
            result.push(currentBranchSum);

            let removedNode = stack.pop();
            currentBranchSum -= removedNode?.val ?? 0;
            while (
                removedNode !== undefined &&
                (removedNode.right === null || hasTurnedNodesWithRight.has(removedNode))
            ) {
                removedNode = stack.pop();
                currentBranchSum -= removedNode?.val ?? 0;
            }

            if (removedNode !== undefined) {
                hasTurnedNodesWithRight.add(removedNode);
                stack.push(removedNode, removedNode.right!);
                currentBranchSum += removedNode.val;
            }

            continue;
        }

        currentBranchSum += node.val;
        if (node.left === null) {
            hasTurnedNodesWithRight.add(node);
            stack.push(node.right!);

            continue;
        }

        stack.push(node.left);
    }

    return result;
};

export const calculateBranchSumsRecursion = (node: BSTNode) => {
    const result: number[] = [];

    const recursiveWalk = (node: BSTNode, currentSum: number): void => {
        if (isLeaf(node)) {
            result.push(currentSum + node.val);

            return;
        }

        if (node.right !== null) {
            recursiveWalk(node.right, currentSum + node.val);
        }

        if (node.left !== null) {
            recursiveWalk(node.left, currentSum + node.val);
        }
    };
    recursiveWalk(node, 0);

    return result;
};
