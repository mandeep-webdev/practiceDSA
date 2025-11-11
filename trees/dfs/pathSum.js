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
 * @param {number} targetSum
 * @return {boolean}
 */
 function checkPathSum(root,sum,target){
    if(!root) return false
    sum = sum + root.val
    if(!root.left && !root.right){
        if(sum === target) {
            return true
        }
    }
    
    const ans = checkPathSum(root.left,sum,target)
    const ans2 = checkPathSum(root.right,sum,target)
    return ans || ans2

 }
var hasPathSum = function(root, targetSum) {
    return checkPathSum(root,0,targetSum)
    
};
