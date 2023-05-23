// 125. Valid Palindrome
// Easy
// 6.8K
// 7K
// Companies
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.



// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Youtube Link :https://youtu.be/P1gmutIKPRU

// solution:=>
let check = (s) => {
    let l = 0;
    let r = s.length - 1;
    while (l <= r) {
        if (s[l] === s[r]) {
            l++;
            r--;
        }
        else {
            return false
        }
    }
    return true;
}
var isPalindrome = (s) => {
    let regex = /[^a-zA-Z0-9]/g;
    let clean = s.replace(regex, '').toLowerCase();
    return check(clean);
}