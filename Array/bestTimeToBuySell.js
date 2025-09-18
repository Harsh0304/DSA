const maxProfitBrute = (prices) => {
  let buy = 0;
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    buy = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      let diff = prices[j] - buy;
      if (diff > profit) {
        profit = diff;
      }
    }
  }
  return profit;
};
