function odds(n) {
  let res = new Array(n).fill(0);
  res.forEach((_, i, arr) => arr[i] = 2*i+1);
  return res;
}

console.info(odds(8));

[1, 2, 3, 4, 5, 6, 7, 8].forEach(function(num) {
  console.log;(num * 2)
});

const numbers = [1, 2, 3]
const otherNumbers = [4, 5, 6]

const numbersConcatenated = numbers.concat(otherNumbers)

console.log(numbersConcatenated)
function concatAll(arr, ...arrays) {
 return arr.concat(...arrays)
}

console.log(concatAll([1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12],[13, 14, 15]))


