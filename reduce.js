// reduce([1, 2, 3, 4], (a, b) => a + b, 0) // 10

let arr = [1, 2, 3, 4];

const reducer = (acc, cur) => {
  acc = acc + cur;
  return acc;
};

console.log(arr.reduce(reducer, 0));
