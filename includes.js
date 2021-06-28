//includes([1, 3, 8, 10], 8)

function includes(arr, item) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }
  return false;
}

console.log(includes([1, 3, 8, 10], 2));
