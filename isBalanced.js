function isBalanced(str) {
  let stack = [];
  var balanced = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '{') {
      stack.push('{');
    } else if (str[i] == '}') {
      if (stack.pop() == '{' && stack.length === 0) {
        balanced = true;
      } else {
        balanced = false;
      }
    }
  }
  return balanced;
}

console.log(isBalanced('foo { bar baz } boo }'));
