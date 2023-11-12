import { BSTNode } from '$algos/data-structures/BST-node';

export const findClosestValueInBST = (root: BSTNode, value: number): number => {
    let result: number = root.val;
    let diff = result - value;

    if (diff === 0) {
        return result;
    }

    const stack: (BSTNode | null)[] = [root];
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
