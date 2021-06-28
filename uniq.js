//uniq([1, 4, 2, 2, 3, 4, 8])

function uniq(arr) {
  arr = arr.filter((item, idx) => idx == arr.indexOf(item));
  console.log(arr);
}

uniq([1, 4, 2, 2, 3, 4, 8]);
