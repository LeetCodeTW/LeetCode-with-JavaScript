/**
 * 371. Sum of Two Integers
 * Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.
 *
 * Example:
 * Given a = 1 and b = 2, return 3.
 * URL:
 * https://leetcode.com/problems/sum-of-two-integers/
 */

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    while (b !== 0) {
        var x = a & b;
        a = a ^ b;
        b = x << 1;
    }
    return a;
};

//console.log(getSum(1, 2));
