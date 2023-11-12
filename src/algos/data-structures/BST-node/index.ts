export class BSTNode {
    val: number;
    left: BSTNode | null;
    right: BSTNode | null;

    constructor(val: number, left?: BSTNode, right?: BSTNode) {
        this.val = val;
        this.left = left !== undefined ? left : null;
        this.right = right !== undefined ? right : null;
        const isValid = BSTNode.performSelfValidate(this);

        if (!isValid) {
            throw new Error(
                'BST is not valid, all nodes to the left must have lesser values and all nodes to the right - greater values'
            );
        }
    }

    public static performSelfValidate(node: BSTNode): boolean {
        const root = node;

        if (root === null) {
            return true;
        }

        const stack: BSTNode[] = [root];

        while (stack.length > 0) {
            const node = stack.pop()!;
            const nodeValue = node.val;
            const leftValue = node.left?.val;
            const rightValue = node.right?.val;

            if (node.left !== null && leftValue !== undefined) {
                if (nodeValue <= leftValue) {
                    return false;
                }
                stack.push(node.left);
            }

            if (node.right !== null && rightValue !== undefined) {
                if (nodeValue <= rightValue) {
                    return false;
                }
                stack.push(node.right);
            }
        }

        return true;
    }
}
