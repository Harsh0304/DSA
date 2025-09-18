const nextGreater = (nums) => {
  let st = [];
  let n = nums.length;
  let res = new Array(n).fill(-1);
  for (let i = 2 * n - 1; i >= 0; i--) {
    let num = nums[i % n];
    while (st.length > 0 && st[st.length - 1] <= num) {
      st.pop();
    }
    if (i < n) {
      res[i] = st.length === 0 ? -1 : st[st.length - 1];
    }
    st.push(num);
  }
  return res;
};

console.log(nextGreater([1, 2, 1]));
