function findPrimesInRange(start: number, end: number): number[] {
    const primes = [];
    for (let i = start; i <= end; i++) {
      if (i > 1 && isPrime(i)) primes.push(i);
    }
    return primes;
  }
  
  function isPrime(num: number): boolean {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  const input2Start = 10, input2End = 20;
  console.log(findPrimesInRange(input2Start, input2End)); 
  