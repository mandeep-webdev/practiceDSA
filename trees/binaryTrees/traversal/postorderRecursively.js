//https://leetcode.com/problems/binary-tree-postorder-traversal/
// TC -- O(n) 
// SC -- O(n)
var postorderTraversal = function(root) {
    const result = []
    function traverseRecursively(root){
        // Base Case
        if(!root) return 
        traverseRecursively(root.left)
        traverseRecursively(root.right)
        result.push(root.val)

    }
    traverseRecursively(root)
    return result

    
};
