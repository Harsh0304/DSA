const instertAtBottom = (st, x) => {
  if (st.length === 0) {
    st.push(x);
    return;
  }
  let ele = st.pop();
  instertAtBottom(st, x);
  st.push(ele);
  return st;
};
const reverse = (st) => {
  if (st.length === 0) {
    return;
  }
  let ans = st.pop();
  reverse(st);
  return instertAtBottom(st, ans);
};

console.log(reverse([6, 5, 4, 3, 2]));
