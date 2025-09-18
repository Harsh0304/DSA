const findLargest = (arr) => {
  let largest = arr[0];
  let secondLargest = -1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
};

const arr = [0, 1, 3, 5, 7, 7, 6];
console.log(findLargest(arr));
