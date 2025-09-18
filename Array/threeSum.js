/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const usingHash = (nums) => {
  let ans = [];
  let seen = new Set();
  for (let i = 0; i < nums.length - 1; i++) {
    let target = -nums[i];
    let st = new Set();
    for (let j = i + 1; j < nums.length; j++) {
      let toFind = target - nums[j];
      if (st.has(toFind)) {
        let trip = [nums[i], nums[j], toFind].sort((a, b) => a - b);
        let key = trip.toString();
        if (!seen.has(key)) {
          ans.push(trip);
          seen.add(key);
        }
      } else {
        st.add(nums[j]);
      }
    }
  }
  return ans;
};
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum > 0) {
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        let trip = [nums[i], nums[j], nums[k]];
        ans.push(trip);
        j++;
        k--;
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
      }
    }
  }
  return ans;
};
