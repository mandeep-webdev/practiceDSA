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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    if(!root) return []
    const queue = [root]
    const result = []

    while(queue.length > 0) {
        const size = queue.length
        let sum = 0
        for(let i=0; i<size; i++) {
            const curNode = queue.shift()
            sum+=curNode.val
            if(curNode.left) queue.push(curNode.left)
            if(curNode.right) queue.push(curNode.right)


        }
        const avg = sum/size
        result.push(avg)

    }    
    return result
};
