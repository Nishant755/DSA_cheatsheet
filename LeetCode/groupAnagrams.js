// 49. Group Anagrams
// Medium
// 15.3K
// 440
// Companies
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Solution=>
var groupAnagrams = function (strs) {
    let map = {};
    for (let str of strs) {
        let s = str.split('').sort().join('');
        //Sort the array in alphabetical order
        // console.log(s); 
        if (!map[s])
            // if Not Value Present then under map we set Array and then push map[s]value in array 
            map[s] = []
        map[s].push(str)
    }
    return Object.values(map)
};


