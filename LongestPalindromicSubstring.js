/*5. Longest Palindromic Substring

Given a string s, return the longest palindromic substring in s.
Example 1:
Input: s = "babadradar"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:
Input: s = "cbbd"
Output: "bb" */
// function Palindrome(a:string):any{ 
//     const rev=a.split('').reverse().join('');
//     if(a===rev){
//         console.log("Palindrome");   
//     }
//     else{
//         console.log("Not"); 
//     }
// }
// console.log(Palindrome("babad"));
function Palindrome(str) {
    var longpalindrome = "";
    for (var i = 0; i < str.length; i++) {
        for (var j = i + 1; j <= str.length; j++) {
            var strr = str.substring(i, j);
            console.log(strr);
            var reversed = "";
            for (var i_1 = strr.length - 1; i_1 >= 0; i_1--) {
                reversed = reversed + strr.charAt(i_1);
            }
            if (reversed == strr) {
                if (longpalindrome.length < reversed.length) {
                    longpalindrome = reversed;
                }
            }
        }
    }
    return longpalindrome.length > 0 ? longpalindrome : "Not";
}
console.log(Palindrome("bbaccradar"));
