import { BSTNode } from '$algos/data-structures/BST-node';

export const findClosestValueInBST = (node: BSTNode, value: number): number => {
    let result: number = node.val;
    let diff = result - value;

    if (diff === 0) {
        return result;
    }

    const stack: (BSTNode | null)[] = [node];
    while (stack.length > 0) {
        // ToDo: implement dequeue and use here
        const node = stack.shift();

        if (!node) {
            continue;
        }

        if (node.val === value) {
            return node.val;
        }

        const currentDiff = node.val - value;
        const isHigher = currentDiff > 0;
        if (Math.abs(currentDiff) < Math.abs(diff)) {
            result = node.val;
            diff = currentDiff;
        }

        if (isHigher) {
            stack.push(node.left);
        } else {
            stack.push(node.right);
        }
    }

    return result;
};

export const findClosestValueInBSTRecursion = (node: BSTNode, value: number): number => {
    const nodeValue = node.val;
    if (nodeValue === value) {
        return nodeValue;
    }

    const diff = nodeValue - value;
    const isHigher = diff > 0;

    const recResult = isHigher
        ? node.left !== null && findClosestValueInBSTRecursion(node.left, value)
        : node.right !== null && findClosestValueInBSTRecursion(node.right, value);

    if (typeof recResult === 'boolean') {
        return nodeValue;
    }

    return Math.abs(nodeValue - value) < Math.abs(recResult - value) ? nodeValue : recResult;
};
