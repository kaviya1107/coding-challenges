/*5. Longest Palindromic Substring 

Given a string s, return the longest palindromic substring in s. 
Example 1:
Input: s = "babad"
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

function Palindrome(str:string):void{ //intead of using string able to return it
    var reversed="";
    for(let i=str.length-1;i>=0;i--){
        reversed=reversed+str.charAt(i);
    }
        if(reversed==str){
            console.log("Palindrome"); 
        }
        else{
            console.log("Not");
        }
    }
Palindrome("mom");
