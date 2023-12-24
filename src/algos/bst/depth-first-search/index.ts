import { BSTNode } from '$algos/data-structures/BST-node';

const isLeaf = (node: BSTNode) => node.left === null && node.right === null;

export const depthFirstSearchStack = (node: BSTNode, searchValue: number) => {
    const stack = [node];
    const shouldTurnToRight: BSTNode[] = [];

    while (stack.length > 0) {
        const node = stack.pop()!;

        if (node.val === searchValue) {
            return node;
        }

        if (isLeaf(node)) {
            const rightNode = shouldTurnToRight.pop();
            if (rightNode !== undefined) {
                stack.push(rightNode);
            }

            continue;
        }

        if (node.left !== null) {
            stack.push(node.left);
        }

        if (node.right !== null) {
            if (node.left === null) {
                stack.push(node.right);
            } else {
                shouldTurnToRight.push(node.right);
            }
        }
    }

    return undefined;
};

export const depthFirstSearchRecursion = (node: BSTNode, searchValue: number): BSTNode | undefined => {
    if (node.val === searchValue) {
        return node;
    }

    return (
        (node.left !== null ? depthFirstSearchRecursion(node.left, searchValue) : undefined) ??
        (node.right !== null ? depthFirstSearchRecursion(node.right, searchValue) : undefined)
    );
};
