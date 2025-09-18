// https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/description/

const minAddPara = (s) => {
  let st = [],
    c = 0;
  for (let ch of s) {
    if (ch === "(") {
      st.push(ch);
    } else if (ch === ")" && st.length > 0) {
      st.pop();
    } else if (ch === ")" && st.length === 0) {
      c++;
    } else {
      continue;
    }
  }
  return st.length + c;
};
console.log(minAddPara("))()(("));
