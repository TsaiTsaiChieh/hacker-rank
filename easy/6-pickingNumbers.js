function pickingNumbers(a) {
  let ans = 0;
  a = a.sort();
  for (let i = 0; i < a.length; i++) {
    const ansArr = [];
    const ele = a[i];
    ansArr.push(ele);
    for (let j = i + 1; j < a.length - 1; j++) {
      const next = a[j];
      console.log(i, ele, next, ele - next);
      if (Math.abs(ele - next) <= 1) {
        ansArr.push(next);
      }
    }
    ans = Math.max(ans, ansArr.length);
  }
  return ans;
}
const [a1, a2] = [
  [4, 6, 5, 3, 3, 1],
  [1, 2, 2, 3, 1, 2],
];
console.log(pickingNumbers(a1)); // 3
console.log(pickingNumbers(a2)); // 5
