function gcd(a: number, b: number): number {
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
const input3A = 56, input3B = 98;
console.log(gcd(input3A, input3B));
