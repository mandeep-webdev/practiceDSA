// TC -- O(n), SC -- O(n)
var levelOrder = function(root) {
    // handle the base case
    if(!root) return []
    const queue = [root]
    const result = []
    while(queue.length > 0){
        const curLevel = []
        const size = queue.length
        for(let i=0; i<size; i++){
            const curNode = queue.shift()
            curLevel.push(curNode.val)
            if(curNode.left) {
                queue.push(curNode.left)
            }
            if(curNode.right){
                queue.push(curNode.right)
            }

        }
        result.push(curLevel)


    }
    return result

    
};
