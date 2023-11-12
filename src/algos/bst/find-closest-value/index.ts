import { BSTNode } from '$algos/data-structures/BST-node';

export const findClosestValueInBST = (root: BSTNode, value: number): number => {
    let result: number = root.val;
    let diff = Math.abs(result - value);

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

        const currentDiff = Math.abs(node.val - value);
        if (currentDiff < diff) {
            result = node.val;
            diff = currentDiff;
        }
        stack.push(node.left, node.right);
    }

    return result;
};
