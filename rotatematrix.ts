function rotate(matrix: number[][]): void {
    const n = matrix.length;
    // Step 1: Transpose the matrix (swap matrix[i][j] with matrix[j][i])
    for (let i = 0; i < n; i++) {
      for (let j = i+1; j < n; j++) {
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      }
    }
    // Step 2: Reverse each row
    for (let i = 0; i < n; i++) {
      console.log(matrix[i].reverse()); 
    }
  }
  // Example usage:
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
rotate(matrix);
