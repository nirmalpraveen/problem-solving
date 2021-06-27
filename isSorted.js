function isSorted(arr) {
  let sortedArray = [...arr];
  return JSON.stringify(arr) === JSON.stringify(sortedArray.sort());
}

console.log(isSorted([1, 2, 3]));
