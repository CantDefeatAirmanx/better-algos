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

export const calculateBranchSumsRecursion = (node: BSTNode) => {};