let matrix = [[1, 0, 0, 1], [1, 0, 1, 0], [0, 1, 1, 1], [0, 0, 1, 0]];

let newMatrix = [];

for (let i = 0; i < matrix.length; i++) {
  console.log(matrix[i]);
  if (i % 2 === 0) {
    newMatrix.push(matrix[i]);
  } else {
    newMatrix.push(matrix[i].reverse());
  }
}

console.log(newMatrix);
