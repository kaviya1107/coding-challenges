function Rearrange(num) {
    var store = num.toString().split('').sort().join('');
    console.log(store);
}
console.log(Rearrange(9012));
console.log(Rearrange(-9012)); //0129---9210
