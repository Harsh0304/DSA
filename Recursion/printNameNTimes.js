const printNameNTimes = (i, n) => {
  if (i > n) {
    return;
  }
  console.log("harsh");
  printNameNTimes(i + 1, n);
};
console.log(printNameNTimes(1, 5));
