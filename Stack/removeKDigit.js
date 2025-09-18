// https://leetcode.com/problems/remove-k-digits/description/
var removeKdigits = function (num, k) {
  let st = [];
  for (let ch of num) {
    while (st.length > 0 && k > 0 && st[st.length - 1] > ch) {
      st.pop();
      k--;
    }
    st.push(ch);
  }
  while (k > 0 && st.length > 0) {
    st.pop();
    k--;
  }

  let answer = st.join("").replace(/^0+/, "");
  return answer == "" ? "0" : answer;
};
