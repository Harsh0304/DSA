const isSorted = (arr) => {
  // code here
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      return false;
    }
  }
  return true;
};
const arr = [0, 1, 3, 5, 7, 7, 7];
console.log(isSorted(arr));
