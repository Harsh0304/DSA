const solve = (curr, st, n) => {
  if (curr === Math.floor(n / 2)) {
    st.pop();
    return;
  }
  let x = st.pop();
  solve(curr + 1, st, n);
  st.push(x);
  return st;
};
const deleteMiddle = (st) => {
  let n = st.length;
  return solve(0, st, n);
};

console.log(deleteMiddle([2]));
