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

function task4(matrix) {
    const m = matrix.length;          
    if (m === 0) return [];
    const n = matrix[0].length;       

    
    const result = Array.from({ length: n }, () => new Array(m));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            result[j][m - 1 - i] = matrix[i][j];
        }
    }

    return result;
}

const matrix = generateMatrix(3, 4, 0, 10);
console.log("До:");
printMatrix(matrix);

const rotated = task4(matrix);

console.log("Після обертання на 90°:");
printMatrix(rotated);
