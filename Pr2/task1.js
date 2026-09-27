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

function task1(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    for (let i = 0; i < m; i++) {
        let sum = 0;
        for (let j = 0; j < n; j++) {
            sum += matrix[i][j];
        }
        const average = sum / n;

        for (let j = 0; j < n; j++) {
            matrix[i][j] = matrix[i][j] - average;
        }
    }

    return matrix;
}

const matrix = generateMatrix(3, 4, 0, 10);
console.log("До:");
printMatrix(matrix);

task1(matrix);

console.log("Після:");
printMatrix(matrix);
