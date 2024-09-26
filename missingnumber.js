function findMissingNumbers(nums) {
    var maxNum = Math.max.apply(Math, nums); // Find the maximum number in the array
    var fullSet = new Set(nums); // Store the existing numbers in a set
    var missingNumbers = [];
    // Check which numbers from 0 to maxNum are missing
    for (var i = 0; i <= maxNum; i++) {
        if (!fullSet.has(i)) {
            missingNumbers.push(i); // If a number is not in the set, it's missing
        }
    }
    return missingNumbers;
}
console.log(findMissingNumbers([3, 0, 1, 5, 6, 8])); // Output: [2, 4]
