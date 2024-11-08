function fibonacci(n) {
    var result = [0, 1];
    for (var i = 2; i < n; i++) {
        result.push(result[i - 1] + result[i - 2]);
    }
    return result;
}
var input5 = 10;
console.log(fibonacci(input5));
