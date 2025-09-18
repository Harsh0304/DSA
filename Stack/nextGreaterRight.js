// https://www.geeksforgeeks.org/problems/next-larger-element-1587115620/1?page=1&category=Stack&sortBy=submissions

const nextGreaterRight = (arr) => {
  let st = [];
  let res = [];
  let n = arr.length;
  for (let i = n - 1; i >= 0; i--) {
    while (st.length > 0 && arr[i] >= st[st.length - 1]) {
      st.pop();
    }
    res[i] = st.length === 0 ? -1 : st[st.length - 1];
    st.push(arr[i]);
  }
  return res;
};
console.log(nextGreaterRight([1, 3, 2, 4]));
