/**
 * Task: calculate node depths of BST (root has depth = 0, root.left has depth 1, etc.)
 * Node Depth is a distance from root to its level. Need to sum up all node depths.
 */

import { BSTNode } from '$algos/data-structures/BST-node';

// space O(d) time O(n)
export const calculateNodeDepthsInitial = (root: BSTNode) => {
    let result = 0;

    const stack = [[root]];
    let currentDepth = 0;

    while (currentDepth === stack.length - 1) {
        const nodesOnDepth = stack[currentDepth];

        const nextDepth = currentDepth + 1;
        nodesOnDepth.forEach((node) => {
            result += currentDepth;
            if (node.left !== null) {
                if (stack[nextDepth] === undefined) {
                    stack[nextDepth] = [];
                }
                stack[nextDepth].push(node.left);
            }

            if (node.right !== null) {
                if (stack[nextDepth] === undefined) {
                    stack[nextDepth] = [];
                }
                stack[nextDepth].push(node.right);
            }
        });

        currentDepth = nextDepth;
    }

    return result;
};

// space O(d) time O(n)
export const calculateNodeDepthsEnhanced = (root: BSTNode) => {
    let result = 0;
    const stack = [{ node: root, depth: 0 }];

    while (stack.length > 0) {
        const obj = stack.pop()!;
        result += obj.depth;

        if (obj.node.left !== null) {
            stack.push({ node: obj.node.left, depth: obj.depth + 1 });
        }

        if (obj.node.right !== null) {
            stack.push({ node: obj.node.right, depth: obj.depth + 1 });
        }
    }

    return result;
};

// space O(d) time O(n)
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
    walkNodes(root, 0);

    return result;
};
