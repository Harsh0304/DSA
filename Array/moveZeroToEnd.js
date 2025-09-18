const moveZeroToEndExtraSpace = (arr) => {
  let temp = [];
  let c = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      temp.push(arr[i]);
    }
  }
  for (let i = 0; i < temp.length; i++) {
    arr[i] = temp[i];
  }
  for (let i = temp.length; i < arr.length; i++) {
    arr[i] = 0;
  }
  return arr;
};
const moveZeroToEndTwoPass = (arr) => {
  let pos = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[pos] = arr[i];
      pos++;
    }
  }
  while (pos < arr.length) {
    arr[pos] = 0;
    pos++;
  }
  return arr;
};
// one pass Solution
const moveZeroToEndOnePass = (arr) => {
  let pos = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[pos]] = [arr[pos], arr[i]];
      pos++;
    }
  }

  return arr;
};

let arr = [1, 2, 0, 4, 3, 0, 5, 0];
// console.log(moveZeroToEndExtraSpace(arr));
// console.log(moveZeroToEndTwoPass(arr));
console.log(moveZeroToEndOnePass(arr));
