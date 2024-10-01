//Write a JavaScript program that returns a subset of a string.
//Sample Data: dog
//Expected Output: ["d", "do", "dog", "o", "og", "g"]

function substring(str:string):string[]{
    const subset:string[]=[];
    for(let i=0;i<str.length;i++){
        for(let j=i+1;j<=str.length;j++){
            subset.push(str.substring(i,j));
        }
    }
    return subset;
}
console.log(substring("kavi"));
