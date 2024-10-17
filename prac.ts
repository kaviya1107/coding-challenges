//anagram
const Input=require('prompt-sync')();
const get=Input("Enter");
console.log(Input,typeof(Input))
// function Anagram(str1:string,str2:string):any{
//     let val1=str1.toLowerCase();
//     let val2=str1.toLowerCase();
//     let sort1=val1.split('').sort().join('');
//     let sort2=val2.split('').sort().join('');
//     if(sort1==sort2){
//          return "Anagram" 
//     }
//     else{
//         return "Not"
//     }
// }
// console.log(Anagram("listen","silent"));

// //maximum
// let max:number[]=[1,2,44,3];
// let s= max.sort() //1 2 3 44
// let m= max[s.length-1]
// console.log(m);

// function large(a:number[]){
//     let r= a.sort()
//     let max= a[r.length-1]
//      return max
// }
// console.log(large([10,90,89]))

// //duplicate
// function duplicate(num:number[]){
//     var arr:number[]=[];
//     for(let i of num){
//         if(num.indexOf(i)===num.lastIndexOf(i)){
//             arr.push(i);
//         }
//     }
//     return arr;
// }
// console.log(duplicate([1,2,3,1]));

// function vowels(i:string){
//     let count=0;
//     for(let str of i){
//         if(str=="a" || str=="e" || str=="i" ||str=="o" || str=="u"){
//             count++;
//         }
//     }
//     return count;
// }
// console.log(vowels("kavi"));
