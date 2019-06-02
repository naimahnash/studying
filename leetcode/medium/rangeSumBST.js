/*

Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

The binary search tree is guaranteed to have unique values.

Example 1:
Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
Output: 32

Example 2:
Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
Output: 23

Note:
The number of nodes in the tree is at most 10000.
The final answer is guaranteed to be less than 2^31.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @description Given the root node of a binary search tree, 
 *  return the sum of values of all nodes with value between L and R (inclusive).
 *  
 * @param {TreeNode} root 
 * @param {string} L lower value
 * @param {string} R upper value
 * 
 * @returns {number} sum of values of all nodes with value between L and R (inclusive) 
 */
function rangeSumBST(root, L, R){
  let sum = 0;
  const traverse = (node, sum, L, R) => {
    while(node != null) {
      traverse(node.left, sum, L, R);
      if(node.val >= L || node.val <= R){
        sum += node.val;
      }    
      traverse(node.right, sum, L, R);
      break;
    }
  }
  traverse(root, 0, L, R);
  return sum;
}