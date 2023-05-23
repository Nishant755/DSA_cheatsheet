// 28. Find the Index of the First Occurrence in a String
// Easy
// 3.5K
// 180
// Companies
// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

//  Solution=>
var strStr = function (haystack, needle) {
    if (haystack === needle || needle === "") {
        return 0;
    }
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] == needle[0]) {
            let sub = haystack.substring(i, i + needle.length);
            if (sub == needle) {
                return i
            }
        }
    }
    return -1

};