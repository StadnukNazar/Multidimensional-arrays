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

function task2(matrix, k) {
    const m = matrix.length;
    const n = matrix[0].length;

    const shiftedRight = [];
    for (let i = 0; i < m; i++) {
        const newRow = [];
        for (let j = 0; j < n; j++) {
            const sourceIndex = ((j - k) % n + n) % n;
            newRow.push(matrix[i][sourceIndex]);
        }
        shiftedRight.push(newRow);
    }

    const result = [];
    for (let i = 0; i < m; i++) {
        const sourceIndex = (i + k) % m;
        result.push(shiftedRight[sourceIndex]);
    }

    return result;
}

const matrix = generateMatrix(3, 4, 0, 10);
console.log("До:");
printMatrix(matrix);

const shifted = task2(matrix, 1);

console.log("Після зсуву на k=1:");
printMatrix(shifted);
