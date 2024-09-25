function rotate(matrix) {
    var _a;
    var n = matrix.length;
    // Step 1: Transpose the matrix (swap matrix[i][j] with matrix[j][i])
    for (var i = 0; i < n; i++) {
        for (var j = i + 1; j < n; j++) {
            _a = [matrix[j][i], matrix[i][j]], matrix[i][j] = _a[0], matrix[j][i] = _a[1];
        }
    }
    // Step 2: Reverse each row
    for (var i = 0; i < n; i++) {
        console.log(matrix[i].reverse());
    }
}
// Example usage:
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
rotate(matrix);
