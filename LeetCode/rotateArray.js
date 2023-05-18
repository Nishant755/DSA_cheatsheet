// 189. Rotate Array
// Medium
// 14.1K
// 1.6K
// Companies
// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

// Video Link:https://www.youtube.com/watch?v=NNkSsmZYU7s

// Solution:
// Step 1)Reverese the array and reverse the array with kth Terms

//Calling Function
let revNum=(nums,start,end)=>{
    while(start<end){
        [nums[start],nums[end]]=[nums[end],nums[start]]
        start++;
        end--;
    }
}
var rotate = function(nums, k) {
   k=k%nums.length
   nums.reverse();
   revNum(nums,0,k-1);
   revNum(nums,k,nums.length-1);
};