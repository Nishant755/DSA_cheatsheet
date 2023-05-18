//  Merge Sorted Array
// Easy
// 10.3K
// 989
// Companies
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

//  Solution;-
// Using Two Pointer
var merge = function(nums1, m, nums2, n) {
    let left = m - 1;
    let right = n - 1;
    for(let i=nums1.length-1;i>=0;i--){
        if(right<0){
            break
        }
        if(left>=0 && nums1[left] > nums2[right]){
            nums1[i]=nums1[left--]
        }
        else{
          nums1[i]=nums2[right--]   
        }
    }
};