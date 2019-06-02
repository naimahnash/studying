/*

Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.

Example 2:
Input: "cbbd"
Output: "bb"
*/

/**
 * @description Given a string s, find the longest palindromic substring in s
 *  
 * @param {string} s  
 * @returns {string} longest palindromic substring in s 
 */
function longestPalindrome(s){
  let longestPalindrome = '';
  for(let low = 0; low < s.length; low++){
    let newPalindrome = s.substr(low, s.length);
    if(isPalindrome(newPalindrome)){
      if(newPalindrome.length > longestPalindrome.length){
        longestPalindrome = newPalindrome;
      }
    }
  }
  return longestPalindrome;
}

function isPalindrome(s){
  let low = 0, high = s.length - 1;
  while(high > low){
    if(s[low] !== s[high]) return false;
  }
  return true;
}

console.log(longestPalindrome("babad"));

function backtrack(){

}