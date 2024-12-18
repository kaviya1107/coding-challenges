"use strict";
// Given an array arr of integers, check if there exist two indices i and j such that :
// i != j
// 0 <= i, j < arr.length
// arr[i] == 2 * arr[j]
Object.defineProperty(exports, "__esModule", { value: true });
// Example 1:
// Input: arr = [10,2,5,3]
// Output: true
// Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 * 5 == 2 * arr[j]
// Example 2:
// Input: arr = [3,1,7,11]
// Output: false
// Explanation: There is no i and j that satisfy the conditions.
function Ifexist(num) {
    var seen = new Set();
    for (var _i = 0, num_1 = num; _i < num_1.length; _i++) {
        var n = num_1[_i];
        if (seen.has(n * 2) || (n % 2 == 0 && seen.has(n / 2))) {
            return true;
        }
        seen.add(n);
    }
    return false;
}
console.log(Ifexist([10, 5, 2, 3])); //true
console.log(Ifexist([3, 1, 7, 11]));
