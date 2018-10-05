/*

You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  
Each character in S is a type of stone you have.  
You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. 
Letters are case sensitive, so "a" is considered a different type of stone from "A".

Example 1:
Input: J = "aA", S = "aAAbbbb"
Output: 3

Example 2:
Input: J = "z", S = "ZZ"
Output: 0

Note:
- S and J will consist of letters and have length at most 50.
- The characters in J are distinct.

*/

/**
 * @description Given strings J representing the types of stones that are jewels, and S representing the stones you have,
 *  
 * @param {string} J case sensitive, with max length 50
 * @param {string} S case sensitive, with max length 50
 * 
 * @returns {number} how many stones are also jewels 
 */
function howManyJewels(J, S){
  let jewels = new Set(J), numJewels = 0;
  for(let char of S){
    if(jewels.has(char)) numJewels++;
  }
  return numJewels;
}


/**
 * @description Given strings J representing the types of stones that are jewels, and S representing the stones you have,
 * 
 * @param {string} J case sensitive, with max length 50
 * @param {string} S case sensitive, with max length 50
 * 
 * @returns {number} how many stones are also jewels 
 */
function howManyJewels2(J, S){
  let numJewels = 0;
  for(let jewel of J){
    for(let i = 0; i < S.length; i++)
      if(S[i] === jewel) numJewels++;
  }
  return numJewels;
}