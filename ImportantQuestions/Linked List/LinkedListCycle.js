

//https://leetcode.com/problems/linked-list-cycle/
var hasCycle = function(head) {
    // Brute force soln use hashset and keep track of visited nodes. If node exist in hashset, cycle exists else cycle doesnot exists
    // TC -- O(n) and SC -- O(n)
    // Better Approach -- Fast and Slow Pointers
    // TC -- O(n) and SC -- O(n)

    let slow = head
    let fast = head
    while(fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
        if(slow === fast) return true
    }
    return false

};
