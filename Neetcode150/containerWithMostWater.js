// TC -- O(n) and SC -- O(1)
var maxArea = function(height) {
    let l = 0;
    let r = height.length - 1
    let maxArea = -Infinity

    while(l<r) {
        let area = Math.min(height[l],height[r]) * (r - l)
        maxArea = Math.max(area,maxArea)
        if(height[l] < height[r]) l++
        else r--
    }
    return maxArea
    
};

// -------------------------------Brute Force ------------------------------------------------
// TC -- O(n^2) and SC -- O(1)
var maxArea = function(height) {
    const n = height.length
    let maxArea = -Infinity
    for(let i=0; i<n-1; i++){
        for(let j=i+1; j<n;j++){
            let area = Math.min(height[i],height[j]) * (j - i)
            maxArea = Math.max(area,maxArea)

        }

    }
    return maxArea
    
};
