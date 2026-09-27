function generateMatrix(m, n, min, max) {
    const matrix = [];
    for (let i = 0; i < m; i++) {
        const row = [];
        for (let j = 0; j < n; j++) {
            const randomNumber = min + Math.floor(Math.random() * (max - min + 1));
            row.push(randomNumber);
        }
        matrix.push(row);
    }
    return matrix;
}

function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i]);
    }
}

const matrix = generateMatrix(3, 4, 0, 10);
printMatrix(matrix);
