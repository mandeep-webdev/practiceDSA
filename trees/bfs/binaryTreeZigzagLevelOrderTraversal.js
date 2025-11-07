// TC -- O(n), SC--O(1)
var zigzagLevelOrder = function(root) {
    //base case
    if(!root) return []
    const queue = [root]
    const result = []
    let leftToRight = true
    while (queue.length > 0) {
        const size = queue.length
        const curLevel = []
        for(let i=0; i<size; i++){
            const curNode = queue.shift()
            if(curNode.left) {
                queue.push(curNode.left)
            }
            if(curNode.right) {
                queue.push(curNode.right)
            }
            curLevel.push(curNode.val)
        }
        if(!leftToRight) {
            curLevel.reverse()
        }
        result.push(curLevel)
        leftToRight = !leftToRight

    }
    return result
    
};
