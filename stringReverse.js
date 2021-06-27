//reverse('abcdef')

function reverse(str) {
  let newArr = [];
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newArr.push(str[i]);
    newStr = newArr.join('');
  }
  return newStr;
}

console.log(reverse('praveen'));
