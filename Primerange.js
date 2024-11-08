function findPrimesInRange(start, end) {
    var primes = [];
    for (var i = start; i <= end; i++) {
        if (i > 1 && isPrime(i))
            primes.push(i);
    }
    return primes;
}
function isPrime(num) {
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0)
            return false;
    }
    return true;
}
// Example input
var input2Start = 10, input2End = 20;
console.log(findPrimesInRange(input2Start, input2End)); // Output: [11, 13, 17, 19]
