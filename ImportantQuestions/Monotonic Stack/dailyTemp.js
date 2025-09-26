// TC -- O(n) and SC -- O(n)
var dailyTemperatures = function(temperatures) {
    const n = temperatures.length
    const result = Array(n).fill(0)
    const stack = []

    for(let i=0; i<n; i++) {
        while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]){
            const idx = stack.pop()
            result[idx] = i - idx

        }
        stack.push(i)
    }
    return result
};
