import { log } from "console";

// anagram
const Input=require('prompt-sync')();
const get=Input("Enter 1st string :");
const get2=Input("Enter 2nd string: ");
const toNum=parseInt(get);
console.log(toNum,typeof(toNum));

const toArray=get2.split('').map(Number)
console.log(toArray);

function Anagram(str1:string,str2:string):any{
    let val1=str1.toLowerCase();
    let val2=str1.toLowerCase();
    let sort1=val1.split('').sort().join('');
    let sort2=val2.split('').sort().join('');
    if(sort1==sort2){
         return "Anagram" 
    }
    else{
        return "Not"
    }
}
console.log(Anagram(get,get2));


let max:number[]=[1,2,44,3];
let s= max.sort() //1 2 3 44
let m= max[s.length-1]
console.log(m);

function large(a:number[]){
    let r= a.sort()
    let max= a[r.length-1]
     return max
}
console.log(large([10,90,89]))

//duplicate
function duplicate(num:number[]){
    var arr:number[]=[];
    for(let i of num){
        if(num.indexOf(i)===num.lastIndexOf(i)){
            arr.push(i);
        }
    }
    return arr;
}
console.log(duplicate([1,2,3,1]));

function remove(num:number[]){
    return [new Set(num)];
  }
  console.log(remove([1,2,3,1]));

//vowels
function vowels(i:string){
    let count=0;
    for(let str of i){
        if(str=="a" || str=="e" || str=="i" ||str=="o" || str=="u"){
            count++;
        }
    }
    return count;
}
console.log(vowels("kavi"));


function reverse(str:string){
 let a=str.split('').reverse().join("");
 if(a==str){
    console.log("Pali");
 }
 else{
    console.log("not");
 }
//  return Number(a);
return a;
}
// console.log(reverse("1234"));
console.log(reverse("mom"));


function rev(str:string){
    return str(::2)
}
console.log(rev("123"));

//substring
function sub(str:string){
        let a=str.substring(2);
        return a;
    }
console.log(sub("kaviya"));

function reverseWords(sentence: string): string {
    return sentence.split(' ').map(word => word.split('').reverse().join('')).join(' ');
  }
  console.log(reverseWords("Hello World"));
  
 
  //factorial
  function factorial(num: number): number {
    if (num <= 1) 
    return 1;
    return num * factorial(num - 1);
  }
  console.log(factorial(5));

  //fibonacci
  function fibonacci(n: number): number[] {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
  }
  
   /*You are a given with an array ar[] and number n. You have to print the number of occurrences of n.
Example 1:
Input:
ar = [1,2,1,2,3,4,1];
n = 1;
Output :
3*/
 function occur(arr:number[],target:number){
    let count=0;
    for(let n of arr){
        if(n==target){
            count++;
        }
    }
    return count;
 }
console.log(occur([1,2,1,2,3,4,1],1));

