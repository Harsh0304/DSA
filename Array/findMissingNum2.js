const findMissingRepeatingNumbers = (nums) => {
  let n = nums.length;
  let map = {};
  for (let num of nums) {
    if (num in map) {
      map[num] += 1;
    } else {
      map[num] = 1;
    }
  }
  let ans = [];
  for (let i = 1; i <= n; i++) {
    if (map[i] > 1) {
      ans.push(Number(i));
    }
  }
  for (let i = 1; i <= n; i++) {
    if (map[i] === undefined) {
      ans.push(i);
    }
  }
  return ans;
};
console.log(findMissingRepeatingNumbers([1, 2, 3, 6, 7, 5, 7]));
