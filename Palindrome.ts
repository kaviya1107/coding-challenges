function isPalindrome(str: string): boolean {
  return str === str.split('').reverse().join('');
}
const input3 = "madam";
console.log(isPalindrome(input3)); 
