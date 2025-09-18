const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
const twoSumOptimal = (nums, target) => {
  let seen = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (seen.hasOwnProperty(diff)) {
      console.log(seen, diff);
      return [seen[diff], i];
    }
    console.log(seen);
    seen[nums[i]] = i;
  }
};

console.log(twoSumOptimal([-3, 4, 3, 90], 0));
