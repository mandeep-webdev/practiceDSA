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
 * @return {number}
 */
var minDepth = function(root) {
    if(!root) return 0
    const queue = [[root,1]]
    while(queue.length > 0){
        let size = queue.length
        for(let i=0; i<size; i++){
        const [curNode,depth] = queue.shift()
        // found leaf node
        if(!curNode.left && !curNode.right){
            return depth
        }
        if(curNode.left){
            queue.push([curNode.left,depth+1])
        }
        if(curNode.right){
            queue.push([curNode.right,depth+1])
        }
        }


    }
    
};
