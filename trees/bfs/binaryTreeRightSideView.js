// TC -- O(n), SC--O(n)
var rightSideView = function(root) {
    if(!root) return []
    const queue = [root]
    const result = []
    while (queue.length > 0) {
        // start level wise traversal
        let size = queue.length
        for(let i=0;i<size; i++){
            const curNode = queue.shift()
            if(curNode.left) {
                queue.push(curNode.left)
            }
            if(curNode.right){
                queue.push(curNode.right)

            }
            // process the last node
            if(i === size - 1){
                result.push(curNode.val)
            }

        }

    }
    return result
};
