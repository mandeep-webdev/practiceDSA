// https://leetcode.com/problems/binary-tree-preorder-traversal/
// TC -- O(n) 
// SC -- O(n) -- skewed tree or log(n) -- balanced tree
var preorderTraversal = function(root) {
    const result = []
    function traverseRecursively (root) {
        if(!root) return 
        result.push(root.val)
        traverseRecursively(root.left) 
        traverseRecursively(root.right)
        

    }
    traverseRecursively(root)
    return result
    
};
