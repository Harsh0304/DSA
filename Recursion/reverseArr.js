const reverseArr = (l, r, arr) => {
  if (l >= r) return;
  [arr[l], arr[r]] = [arr[r], arr[l]];
  reverseArr(l + 1, r - 1, arr);
  return arr;
};
let arr = [2, 3, 1, 4, 5];
console.log(reverseArr(0, arr.length - 1, arr));
