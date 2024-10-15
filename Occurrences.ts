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

function Occurrences(arr: number[], target: number): number {
    let count = 0; 
    for (let n of arr) {
        if (n === target) { 
            count++; 
        }
    }
    return count; 
}
console.log(Occurrences([2, 2, 5, 5, 3], 3));  // Output: 1
console.log(Occurrences([1,2,1,2,3,4,1], 1));