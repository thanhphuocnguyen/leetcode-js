/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
var replaceValueInTree = function (root) {
  const levelSums = [];
  calculateSum(root, levelSums, 0);
  replaceValueInTreeInternal(root, 0, levelSums, 0);
  return root;
};

function calculateSum(node, levelSums, level) {
  if (!node) return;

  levelSums[level] = (levelSums[level] || 0) + node.val;
  calculateSum(node.left, levelSums, level + 1);
  calculateSum(node.right, levelSums, level + 1);
}

function replaceValueInTreeInternal(node, siblingSum, levelSums, level) {
  if (!node) return;
  let leftChildVal = !node.left ? 0 : node.left.val;
  let rightChildVal = !node.right ? 0 : node.right.val;

  if (level == 0 || level == 1) {
    node.val = 0;
  } else {
    node.val = levelSums[level] - node.val - siblingSum;
  }

  replaceValueInTreeInternal(node.left, rightChildVal, levelSums, level + 1);
  replaceValueInTreeInternal(node.right, leftChildVal, levelSums, level + 1);
}

const root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(9);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(10);
root.right.right = new TreeNode(7);

console.log(replaceValueInTree(root));
