function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
var input3 = "madam";
console.log(isPalindrome(input3)); // Output: true
