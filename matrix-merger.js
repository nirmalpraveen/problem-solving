let arr = [[1, 3], [4, 6], [5, 8]];
let newArr = [];
newArr.push(arr[0]);

for (let i = 1; i < arr.length; i++) {
  console.log(arr[i][0]);
  console.log(newArr[0][1]);
  console.log(arr[i][1]);
  let newArrLength = newArr.length;
  if (
    arr[i][0] < newArr[newArrLength - 1][1] &&
    newArr[newArrLength - 1][1] < arr[i][1]
  ) {
    newArr[0][1] = arr[i][1];
  } else {
    newArr.push(arr[i]);
  }
}

console.log(newArr);
