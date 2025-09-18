// https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/description/

const maxDepth = (s) => {
  let st = [];
  let max = 0;
  for (let ch of s) {
    if (ch === "(") {
      st.push(ch);
    } else if (ch === ")") {
      max = Math.max(max, st.length);
      st.pop();
    } else {
      continue;
    }
  }
  return max;
};

console.log(maxDepth("(()((())))"));
