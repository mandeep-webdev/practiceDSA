
// TC -- O(m+n)
// SC -- O(1)
var merge = function(nums1, m, nums2, n) {
    // start from the last indexes
    let i = m-1;
    let j= n-1;
    let k = m+n-1;
    while (j >= 0) {
        if( i >=0 && nums1[i] > nums2[j]){
            nums1[k] = nums1[i]
            k--
            i--

        }
        else {
            nums1[k] = nums2[j]
            k--
            j--


        }
    }
    
};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    const nums1Copy = nums1.slice(0,m)
    let i = 0;
    let j= 0;
    let k = 0;
    while (i < m && j < n) {
        if(nums1Copy[i] <= nums2[j] ){
            nums1[k] = nums1Copy[i]
            k++ ;
            i++ ;
        }
        else {
            nums1[k] = nums2[j]
            k++ ;
            j++ ;

        }

    }
    while (j < n) {
        nums1[k] = nums2[j]
            k++ ;
            j++ ;
    }
    while (i < m) {
        nums1[k] = nums1Copy[i]
            k++ ;
            i++ ;
    }
    
};
