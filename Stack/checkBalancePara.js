const balancePara = (s) => {
  let st = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      st.push(s[i]);
    } else {
      if (st.length === 0) return false;
      let top = st.pop();
      if (
        (s[i] === ")" && top === "(") ||
        (s[i] === "]" && top === "[") ||
        (s[i] === "}" && top === "{")
      ) {
        continue;
      } else {
        return false;
      }
    }
  }
  return st.length === 0;
};

console.log(balancePara("[{}]"));
