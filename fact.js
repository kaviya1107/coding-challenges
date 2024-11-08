function factorial(n) {
    if (n <= 1)
        return 1;
    return n * factorial(n - 1);
}
var input1 = 5;
console.log(factorial(input1)); // Output: 120
