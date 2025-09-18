const usingExtraSpace = (nums) => {
  let pos = [];
  let neg = [];
  for (let num of nums) {
    if (num >= 0) {
      pos.push(num);
    } else {
      neg.push(num);
    }
  }
  let k = 0;
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 === 0) {
      nums[i] = pos[k];
      k++;
    } else {
      nums[i] = neg[j];
      j++;
    }
  }
  return nums;
};
var rearrangeArray = function (nums) {
  let result = [];
  let pos = 0;
  let neg = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 0) {
      result[pos] = nums[i];
      pos += 2;
    } else {
      result[neg] = nums[i];
      neg += 2;
    }
  }
  return result;
};

console.log(rearrangeArray([3, 1, -2, -5, 2, -4]));
