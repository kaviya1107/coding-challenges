function missingNumber(nums) {
    var expectedSum = (n * (n + 1)) / 2;
    var actualSum = nums.reduce(function (acc, num) { return acc + num; }, 0);
    return expectedSum - actualSum;
}
console.log(missingNumber([3, 0, 1])); // Output: 2
