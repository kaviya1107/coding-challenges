function findMissingNumbers(nums: number[]): number[] {
    const maxNum = Math.max(...nums); // Find the maximum number in the array
    const fullSet = new Set<number>(nums); // Store the existing numbers in a set
    const missingNumbers: number[] = [];
    // Check which numbers from 0 to maxNum are missing
    for (let i = 0; i <= maxNum; i++) {
        if (!fullSet.has(i)) {
            missingNumbers.push(i); // If a number is not in the set, it's missing
        }
    }
    return missingNumbers;
}
console.log(findMissingNumbers([3, 0, 1, 5, 6])); // Output: [2, 4]

