const print1ToN = (n) => {
  if (n === 0) {
    return;
  }
  console.log(n);
  print1ToN(n - 1);
};
print1ToN(5);
