"use strict";
// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
// A subarray is a contiguous non-empty sequence of elements within an array.
Object.defineProperty(exports, "__esModule", { value: true });
// Example 1:
// Input: nums = [1,1,1], k = 2
// Output: 2
// Example 2:
// Input: nums = [1,2,3], k = 3
// Output: 2
function subarrays(input, key) {
    var count = 0;
    for (var i = 0; i < input.length; i++) {
        var sum = 0;
        for (var j = i; j < input.length; j++) {
            sum = sum + input[j];
            if (sum == key) {
                count++;
            }
        }
    }
    return count;
}
console.log(subarrays([1, 1, 1], 2));
console.log(subarrays([1, 2, 3, 6, 4, 2, 0, 4], 6));
