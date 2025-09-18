const nextSmaller = (arr) => {
  // code here
  let st = [];
  let n = arr.length;
  let res = new Array(n).fill(-1);
  for (let i = n - 1; i >= 0; i--) {
    let num = arr[i];
    while (st.length > 0 && st[st.length - 1] >= num) {
      st.pop();
    }
    res[i] = st.length === 0 ? -1 : st[st.length - 1];
    st.push(num);
  }

  return res;
};
console.log(nextSmaller([4, 2, 1, 5, 3]));
