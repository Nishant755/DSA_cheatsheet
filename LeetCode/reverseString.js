// Reverse Words in a String
// Medium
// 5.9K
// 4.6K
// Companies
// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.



// Example 1:

// Input: s = "the sky is blue"
// Output: "blue is sky the"

// Solution=>
var reverseWords = (s) => {
    let str = s.split(' ');
    s = ""
    for (let i = str.length - 1; i >= 0; i--)
        if (str[i] != "" && str[i] != " ") s += str[i] + " "
    return s.trim()

};