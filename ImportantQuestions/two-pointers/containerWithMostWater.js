// TC -- O(n)
// SC -- O(1)
var maxArea = function(height) {
    let maxArea = 0
    let l = 0;
    let r = height.length - 1
    while(l < r){
        const width = r - l
        const minHeight = Math.min(height[l],height[r])
        const area =  minHeight * width
        maxArea = Math.max(maxArea,area)
        // move shorter height pointer inward to find better answer
        if(height[l] < height[r]) {
            l++
        }
        else {
            r--
        }
    }
    return maxArea
    
};
