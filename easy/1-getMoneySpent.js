function getMoneySpent(keyboards, drives, b) {
  /*
   * Write your code here.
   */
  let ans = -1;
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      const sum = keyboards[i] + drives[j];
      if (sum <= b && sum > ans) ans = sum;
    }
  }
  return ans;
}

const [keyboards1, drives1, b1] = [[3, 1], [5, 2, 8], 10];
console.log(getMoneySpent(keyboards1, drives1, b1)); // 9
