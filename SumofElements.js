/*You are a given with an array ar[] and number n. You have to print the sum of elements which are lesser than the n in the array.
Example 1:
Input:
ar = [2,3,4,1,6,7];
n = 4;
Output :
6
Explanation:
2,3,1 are the only elements which are less than 4. So 2 + 3 + 1 is 6.

Example 2:
Input:
ar = [2,4,6,5,7]
n = 2;
Output :
0*/
function sum(arr, value) {
    var count = 0; //2+3=5+1=6
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var n = arr_1[_i];
        if (n < value) {
            count += n;
        }
        // else{
        //     console.log("0");
        // }
    }
    return count;
}
console.log(sum([2, 4, 6, 5, 7], 2));
console.log(sum([2, 3, 4, 1, 6, 7], 4));
