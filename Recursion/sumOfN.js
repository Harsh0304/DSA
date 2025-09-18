const sumOfN = (n, sum) => {
  if (n < 1) {
    console.log(sum);
    return;
  }
  sumOfN(n - 1, sum + n);
};
const sumOfNV2 = (n) => {
  if (n === 0) {
    return 0;
  }
  return n + sumOfNV2(n - 1);
};
// console.log(sumOfN(3, 0));
console.log(sumOfNV2(3));
