/*
 * Complete the 'extraLongFactorials' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function extraLongFactorials(n) {
  // Write your code here
  let ans = BigInt(1);
  for (let i = 1; i <= n; i++) {
    ans *= BigInt(i);
  }
  console.log(ans.toString());
}
const n1 = 25;
console.log(extraLongFactorials(n1)); // 15511210043330985984000000
