const bruteForce = (nums1, nums2) => {
  let ans = [];
  for (let i = 0; i < nums1.length; i++) {
    let currEle = nums1[i];
    let nextGreater = -1;
    let j = 0;
    while (nums2[nums2.length - j - 1] !== currEle) {
      if (nums2[nums2.length - j - 1] > currEle) {
        nextGreater = nums2[nums2.length - j - 1];
      }
      j++;
    }
    ans.push(nextGreater);
  }
  return ans;
};
const usingRToL = (nums1, nums2) => {
  let mp = {};
  let st = [];
  for (let i = 0; i < nums2.length; i++) {
    while (st.length > 0 && nums2[i] > st[st.length - 1]) {
      mp[st.pop()] = nums2[i];
    }
    st.push(nums2[i]);
  }
  while (st.length > 0) {
    mp[st.pop()] = -1;
  }
  console.log(mp, st);
  let ans = [];
  for (let num1 of nums1) {
    ans.push(mp[num1]);
  }
  return ans;
};
var nextGreaterElement = function (nums1, nums2) {
  let mp = {};
  let st = [];
  for (let i = nums2.length - 1; i >= 0; i--) {
    while (st.length > 0 && nums2[i] > st[st.length - 1]) {
      st.pop();
    }
    mp[nums2[i]] = st.length === 0 ? -1 : st[st.length - 1];
    st.push(nums2[i]);
  }
  console.log(mp, st);
  let ans = [];
  for (let num1 of nums1) {
    ans.push(mp[num1]);
  }
  return ans;
};
