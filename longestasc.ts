/*Write a program that reads an array of ints and outputs the length of the
longest sequence in strictly ascending order. Print the elements of longest
ascending sequence in an array Elements of the sequence must go one after
another. A single number is assumed to be an ordered sequence with the length= 1.

Enter the number of elements 
5
Enter 5 numbers in any order to find the longest ascending sequence

45
40
0
39
10
The max value is : 2
2numbers in ascending order
0 39*/
function longestAscending(arr: number[]): { length: number; sequence: number[] } {
    let maxLength = 1;  
    let currentLength = 1;  
    let maxStartIndex = 0;  
    let startIndex = 0; 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {  
            currentLength++;
        } else {
            if (currentLength > maxLength) {
                maxLength = currentLength;
                maxStartIndex = startIndex; 
            }
            currentLength = 1;
            startIndex = i;
        }
    }
    if (currentLength > maxLength) {
        maxLength = currentLength;
        maxStartIndex = startIndex;
    }
    const longestSequence = arr.slice(maxStartIndex, maxStartIndex + maxLength);
    return { length: maxLength, sequence: longestSequence };
}
const arr = [45, 40, 0, 39, 10];
const result = longestAscending(arr);
console.log(`The max value is: ${result.length}`);
console.log(`${result.length} numbers in ascending order:`);
console.log(result.sequence.join(' '));


