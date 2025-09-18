const missingNumber = (arr) => {
  let n = arr.length;
  let excepectSum = (n * (n + 1)) / 2;
  let sum = arr.reduce((sum, ar) => sum + ar, 0);
  return excepectSum - sum;
};
