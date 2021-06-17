var isValidBST = function (root) {

  function callDFS(node, min, max) {
    if (!node) return true;
    if (node.val <= min || node.val >= max) return false;
    return callDFS(node.left, min, node.val) && callDFS(node.right, node.val, max)
  }
  return callDFS(root, -Infinity, Infinity)
};