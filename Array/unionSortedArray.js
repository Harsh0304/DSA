const findUnion = (a, b) => {
  let set = new Set([...a, ...b]);
  return [...set].sort((a, b) => a - b);
};

const findUnionTwoPointer = (a, b) => {
  let i = 0;
  let j = 0;
  let result = [];
  while (i < a.length && j < b.length) {
    if (a[i] <= b[j]) {
      if (result.length == 0 || a[i] !== result.at(-1)) {
        result.push(a[i]);
      }
      i++;
    } else {
      if (b[j] < a[i]) {
        if (result.length == 0 || b[j] !== result.at(-1)) {
          result.push(b[j]);
        }
        j++;
      }
    }
  }
  while (i < a.length) {
    if (result.length == 0 || a[i] !== result.at(-1)) {
      result.push(a[i]);
    }
    i++;
  }
  while (j < b.length) {
    if (result.length == 0 || b[j] !== result.at(-1)) {
      result.push(b[j]);
    }
    j++;
  }

  return result;
};

let a = [1, 2, 3, 4, 5];
let b = [1, 2, 3, 6, 7];
console.log(findUnion(a, b));
