/**
 * @param {number} n
 * @return {string}
 * 
 * 38. Count and Say
 * The count-and-say sequence is the sequence of integers with the first five terms as following:
 * 1.     1
 * 2.     11
 * 3.     21
 * 4.     1211
 * 5.     111221
 * 
 * 1 is read off as "one 1" or 11.
 * 11 is read off as "two 1s" or 21.
 * 21 is read off as "one 2, then one 1" or 1211.
 * 
 * Given an integer n, generate the nth term of the count-and-say sequence.
 * Note: Each term of the sequence of integers will be represented as a string.
 * 
 * Example 1:
 * Input: 1
 * Output: "1"
 * 
 * Example 2:
 * Input: 4
 * Output: "1211"
 * 
 * URL:
 * https://leetcode.com/problems/count-and-say/description/
 */
var countAndSay = function(n) {
  let res = [1];
    
  for (let i = 1; i < n; i++) {
    res = reduce(res);
  }
     
  return res.join("");
};

function reduce(arr) {
  let arr2 = [];
  let el = arr[0];
  let count = 1;
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === el) count++;
    else {
      arr2.push(count, el);
      el = arr[i];
      count = 1;
    }
  }
  
  arr2.push(count, el);
  return arr2;
}