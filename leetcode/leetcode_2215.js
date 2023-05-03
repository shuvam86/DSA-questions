/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {

    let s1 = new Set(nums1);
    let s2 = new Set(nums2);

    for(let i of s1) {
        if(s2.has(i)) {
            s2.delete(i);
            s1.delete(i);
        }
    }

    return [Array.from(s1),Array.from(s2)];
    
};