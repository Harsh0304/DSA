// https://leetcode.com/problems/asteroid-collision/description/
const asteroid = (nums) => {
  let st = [];
  for (let num of nums) {
    while (st.length > 0 && num < 0 && st[st.length - 1] > 0) {
      let sum = 0;
      sum = num + st[st.length - 1];
      if (sum < 0) {
        st.pop();
      } else if (sum > 0) {
        num = 0;
      } else {
        st.pop();
        num = 0;
      }
    }
    if (num !== 0) {
      st.push(num);
    }
  }
  return st;
};
