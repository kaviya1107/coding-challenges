// You are tasked with implementing a utility function mergeArrays that takes two sorted arrays of numbers and merges them into a single sorted array without duplicates.
// Write a function mergeArrays with the following signature:
// typescript
// Copy code
// function mergeArrays(arr1: number[], arr2: number[]): number[];
// Requirements:
// Both input arrays are sorted in ascending order.
// The output array should also be sorted in ascending order.
// The output array should not contain any duplicates.
// Do not use the Set object to handle duplicates.
// Example Input:
// const array1 = [1, 3, 5, 7];
// const array2 = [2, 3, 6, 8, 9];
// const result = mergeArrays(array1, array2);
// Expected Output:
// [1, 2, 3, 5, 6, 7, 8, 9]
function mergeArray(input1, input2) {
    var input = input1.concat(input2).sort();
    var merge = [];
    for (var _i = 0, input_1 = input; _i < input_1.length; _i++) {
        var data = input_1[_i];
        if (input.indexOf(data) === input.lastIndexOf(data) || merge.indexOf(data) === -1) {
            merge.push(data);
        }
    }
    return merge;
}
console.log(mergeArray([1, 3, 5, 7], [2, 3, 6, 8, 9]));
