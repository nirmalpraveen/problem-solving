var arr1 = [1, 2, 3];
var arr2 = [5, 6, 7];

var arr3 = arr1.filter(item => arr2.indexOf(item) != -1);

console.log(arr3);
