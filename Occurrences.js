/*You are a given with an array ar[] and number n. You have to print the number of occurrences of n.
Example 1:
Input:
ar = [1,2,1,2,3,4,1];
n = 1;
Output :
3

Example 2:
Input:
ar = [2,2,5,5,3]
n = 3;
Output :
1*/
function Occurrences(arr, target) {
    var count = 0; // Variable to keep track of the occurrences
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var n = arr_1[_i];
        if (n === target) { // Check if the current number matches the target
            count++; // Increment the count if it matches
        }
    }
    return count; // Return the final count after the loop finishes
}
console.log(Occurrences([2, 2, 5, 5, 3], 3)); // Output: 1
console.log(Occurrences([1, 2, 1, 2, 3, 4, 1], 1));
