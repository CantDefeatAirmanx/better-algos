/**
 * Task: calculate node depths of BST (root has depth = 1, root.left has depth 2, etc.)
 */

import { BSTNode } from '$algos/data-structures/BST-node';

export const calculateNodeDepthsInitial = (root: BSTNode) => {};

export const calculateNodeDepthsRecursion = (root: BSTNode) => {
    let result = 0;

    const walkNodes = (node: BSTNode, depth: number) => {
        result += depth;

        if (node.left !== null) {
            walkNodes(node.left, depth + 1);
        }

        if (node.right !== null) {
            walkNodes(node.right, depth + 1);
        }
    };
    walkNodes(root, 1);

    return result;
};
