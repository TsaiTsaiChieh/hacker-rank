/*
 * Complete the 'beautifulDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER i
 *  2. INTEGER j
 *  3. INTEGER k
 */

function beautifulDays(i, j, k) {
  // Write your code here
  let days = 0;
  for (let idx = i; idx <= j; idx++) {
    const reverse = parseInt(String(idx).split("").reverse().join(""));
    const diff = Math.abs(idx - reverse);
    if ((diff / k) % 1 === 0) days++;
  }
  return days;
}
const [i1, j1, k1] = [20, 23, 6];
console.log(beautifulDays(i1, j1, k1));
