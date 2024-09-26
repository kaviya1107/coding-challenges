function missingNumber(nums: number[]): number {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2; //sum of numbers from 0 to 1
    const actualSum = nums.reduce((acc, num) => acc + num, 0); //sum of  elements in array
    return expectedSum - actualSum; 
}
console.log(missingNumber([3, 0, 1]));  // Output: 2
