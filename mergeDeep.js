function assignDeep(obj1, obj2) {
  Object.assign(obj1, obj2);
  console.log(obj1);
}

assignDeep({ a: { b: { c: 1 } } }, { a: { b: { d: 2 } }, e: 3 });
