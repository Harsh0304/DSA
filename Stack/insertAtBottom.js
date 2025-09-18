const solve = (st, x) => {
  if (st.length === 0) {
    st.push(x);
    return;
  }
  let ele = st.pop();
  solve(st, x);
  st.push(ele);
  return st;
};
const insertAtBottom = (st, x) => {
  return solve(st, x);
};

console.log(insertAtBottom([], 100));
