const findLargest = (arr) => {
  let largest = -Infinity;
  for (let elem of arr) {
    if (elem > largest) {
      largest = elem;
    }
  }
  return largest;
};

const arr = [0, 1, 3, 55, 2, 6, 8];
console.log(findLargest(arr));
