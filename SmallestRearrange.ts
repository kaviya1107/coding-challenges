function Rearrange(num:number):any{
    let store=num.toString().split('').sort().join('')
    for(let n of store){
        if(n=='0'){
            var result=store[1]+store[0]+store.substring(2);
            return result;
        }
        else if(n=='-'){
            var res=store.replace('-','');
            var reverse
        }
    }
}
console.log(Rearrange(9012));//0129
console.log(Rearrange(-9012));//0129---9210