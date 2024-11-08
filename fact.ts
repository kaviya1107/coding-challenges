function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
const input1 = 5;
console.log(factorial(input1)); 
