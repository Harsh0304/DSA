const removeDuplicate = (arr) => {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      arr[i + 1] = arr[j];
      i++;
    }
  }
  arr.length = i + 1;
  return arr;
};
const usingSet = (arr) => {
  const set = new Set(arr);
  return [...set];
};

const arr = [2, 2, 2, 2, 2, 3, 3, 4, 4, 5];
// console.log(removeDuplicate(arr));
console.log(usingSet(arr));
