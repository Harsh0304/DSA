const inserInSorted = (st, x) => {
  if (st.length === 0 || x > st[st.length - 1]) {
    st.push(x);
    return;
  }
  let ele = st.pop();
  inserInSorted(st, x);
  st.push(ele);
  return st;
};
const sort = (st) => {
  if (st.length === 0) {
    return;
  }
  let x = st.pop();
  sort(st);
  inserInSorted(st, x);
  return st;
};

console.log(sort([5, 3, 6, 9, 1]));
