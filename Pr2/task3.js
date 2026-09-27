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

function task3(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;

    let max = matrix[0][0];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] > max) {
                max = matrix[i][j];
            }
        }
    }

    const rowsToRemove = [];
    const colsToRemove = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === max) {
                if (rowsToRemove.indexOf(i) === -1) rowsToRemove.push(i);
                if (colsToRemove.indexOf(j) === -1) colsToRemove.push(j);
            }
        }
    }

    const result = [];
    for (let i = 0; i < m; i++) {
        if (rowsToRemove.indexOf(i) !== -1) continue;

        const newRow = [];
        for (let j = 0; j < n; j++) {
            if (colsToRemove.indexOf(j) !== -1) continue;
            newRow.push(matrix[i][j]);
        }
        result.push(newRow);
    }

    return result;
}

const matrix = generateMatrix(4, 4, 0, 10);
console.log("До:");
printMatrix(matrix);

const result = task3(matrix);

console.log("Після видалення рядків/стовпців з максимумом:");
printMatrix(result);
