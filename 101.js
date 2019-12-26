var isSymmetric = function (root) {
    function traverseTree(leftTree, rightTree) {
        if (leftTree === null || rightTree == null) {
            if (leftTree === rightTree) return true;
            return false;
        }
        if (leftTree.val === rightTree.val) {
            return (
                traverseTree(leftTree.left, rightTree.right) *
                traverseTree(leftTree.right, rightTree.left)
            );
        }
        return false;
    }
    if (!root) return true;
    return traverseTree(root.left, root.right);
};