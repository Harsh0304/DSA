const usingSort = (nums) => {
  nums.sort((a, b) => a - b);
  let maxCount = -Infinity;
  let majority = -Infinity;
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) {
      count++;
    } else {
      if (maxCount < count) {
        maxCount = count;
        majority = nums[i - 1];
        count = 1;
      }
    }
  }
  if (maxCount < count) {
    majority = nums[nums.length - 1];
  }
  return majority;
};
const usingHashMap = (nums) => {
  let hashMap = {};
  let maxCount = 0;
  let majority = -Infinity;
  for (let num of nums) {
    if (hashMap.hasOwnProperty(num)) {
      hashMap[num] += 1;
    } else {
      hashMap[num] = 1;
    }
    if (hashMap[num] > maxCount) {
      maxCount = hashMap[num];
      majority = num;
    }
  }
  return majority;
};
var majorityElement = function (nums) {
  let majority = null;
  let c = 0;
  for (let num of nums) {
    if (c === 0) {
      majority = num;
      c = 1;
    } else if (majority === num) {
      c++;
    } else {
      c--;
    }
  }
  return majority;
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
