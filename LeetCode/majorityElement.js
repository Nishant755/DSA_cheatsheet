// Majority Element
// Easy
// 14.7K
// 444
// Companies
// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Solution:-
// Using Hash Map
var majorityElement = function(nums) {
    let obj={};
    for(let i=0;i<nums.length;i++){
        if(obj[nums[i]]){
              obj[nums[i]]++
        }
        else{
            obj[nums[i]]=1
        }
      }  
      for(let key in obj){
          if(obj[key]>nums.length/2) return key
      }
  };
 