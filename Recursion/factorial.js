const factPara = (n, fact) => {
  if (n < 1) {
    console.log(fact);
    return;
  }
  factPara(n - 1, fact * n);
};
const fact = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * fact(n - 1);
};
// factPara(3, 1);
console.log(fact(4));
