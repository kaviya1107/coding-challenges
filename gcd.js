function gcd(a, b) {
    while (b !== 0) {
        var temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
var input3A = 56, input3B = 98;
console.log(gcd(input3A, input3B));
