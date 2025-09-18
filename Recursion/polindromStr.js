const polindromStr = (i, str) => {
  if (i >= str.length / 2) return true;
  if (str[i] !== str[str.length - i - 1]) return false;
  return polindromStr(i + 1, str);
};
console.log(polindromStr(0, "MADAM"));
