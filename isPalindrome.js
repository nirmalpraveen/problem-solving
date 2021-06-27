isPalindrome('A man a plan a canal Panama'); // true

function isPalindrome(str) {
  let newStr = str
    .split(' ')
    .reverse()
    .join('')
    .toLowerCase();
  str = str
    .split(' ')
    .join('')
    .toLowerCase();
  console.log(str);
  console.log(newStr);
  console.log(str == newStr);
}
