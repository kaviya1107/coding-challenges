/*You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
Increment the large integer by one and return the resulting array of digits.
 
Example 1:
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
Example 2:
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
Example 3:
Input: digits = [9,9]
Output: [1,0]
Explanation: The array represents the integer 99.
Incrementing by one gives 99 + 1 = 100.
Thus, the result should be [1,0,0].*/

// function PlusOne(arr:number[]):any{
//  arr[arr.lastIndexOf(1)]+=1;
//     return arr
// }
// console.log(PlusOne([4,3,2,1]));

//another method
function Plus(array:number[]):any{
    let ar=array.join(""); //"4322"
    let store=Number(ar)+1; //4323 Number() is used to convert the string into number
    let target=store.toString().split('').map(Number); //map is used to convert array of string is converted to array of number
    console.log(target);
}
Plus([4,3,2,2]);
Plus([9,9]);

