// run `node index.js` in the terminal

let arr = [[1, 0, 0, 1], [1, 0, 1, 0], [0, 1, 1, 1], [0, 0, 1, 0]];

let length = arr.length;

for (let i = 1; i <= length - 2; i++) {
  let elementLength = arr[i].length;
  for (let j = 1; j <= elementLength - 2; j++) {
    if (
      arr[i][j] === 1 &&
      (arr[i - 1][j] != 1 &&
        arr[i + 1][j] != 1 &&
        arr[i][j - 1] != 1 &&
        arr[i][j + 1] != 1)
    ) {
      arr[i][j] = 0;
    }
  }
}

console.log(arr);
