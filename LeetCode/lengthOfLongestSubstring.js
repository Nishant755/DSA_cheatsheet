// Given a string s, find the length of the longest 
// substring
//  without repeating characters.



// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Solution=>
// Using Sliding Window method
var lengthOfLongestSubstring = function (s) {
    let left = 0; n = s.length; set = new Set(); maxSize = 0;
    if (n == 0) return 0;
    if (n == 1) return 1;
    for (i = 0; i < n; i++) {
        while (set.has(s[i])) {
            set.delete(s[left])
            left++
        }
        set.add(s[i])
        maxSize = Math.max(maxSize, i - left + 1)
    }
    return maxSize;
};