// https://leetcode.com/problems/binary-tree-inorder-traversal/

// TC -- O(n)
// SC -- o(n) -- skewed tree , O(logn) -- balanced tree
var inorderTraversal = function(root) {
    const result = []
    function traverseRecursively(root){
        // Base Case
        if(!root) return 
        traverseRecursively(root.left)
        result.push(root.val)
        traverseRecursively(root.right)

    }
    traverseRecursively(root)
    return result

    
};
