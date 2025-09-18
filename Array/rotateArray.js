const rotateByOne = (arr) => {
  let temp = arr[0];
  for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
  }
  arr[arr.length - 1] = temp;
  return arr;
};

const rotateByK = (arr, k) => {
  let temp = [];
  for (let i = 0; i < k; i++) {
    temp.push(arr[i]);
  }
  for (let i = k; i < arr.length; i++) {
    arr[i - k] = arr[i];
  }
  let j = 0;
  for (let i = arr.length - k; i < arr.length; i++) {
    arr[i] = temp[j];
    j++;
  }
  return arr;
};

const rotateRightByK = (arr, k) => {
  let temp = [];
  let n = arr.length - 1;
  k = k % arr.length;
  for (let i = arr.length - k; i < arr.length; i++) {
    temp.push(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    arr[n - i] = arr[n - k - i];
  }
  for (let i = 0; i < k; i++) {
    arr[i] = temp[i];
  }

  return arr;
};

const arr = [1, 2, 3, 4, 5, 6, 7];
// console.log(rotateByOne(arr));
console.log(rotateRightByK(arr, 3));
