// 53. Maximum Subarray
// Medium
// 29.7K
// 1.3K
// Companies
// Given an integer array nums, find the 
// subarray
//  with the largest sum, and return its sum.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.

// Solution=>
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let prev=0;
    let max=-Number.MAX_VALUE;
    for(let i=0;i<nums.length;i++){
      prev=Math.max(prev+nums[i],nums[i]);
      max=Math.max(prev,max)
    }
    return max
};