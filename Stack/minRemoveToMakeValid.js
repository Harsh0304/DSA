// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/
const minRemoveToMakeValid = (s) => {
  let st = [];
  let set = new Set();
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      st.push(i);
    } else if (s[i] === ")") {
      if (st.length === 0) {
        set.add(i);
      } else {
        st.pop();
      }
    }
  }
  while (st.length > 0) {
    set.add(st.pop());
  }
  let res = "";
  for (let i = 0; i < s.length; i++) {
    if (!set.has(i)) {
      res += s[i];
    }
  }
  return res;
};
