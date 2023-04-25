/*
 * Complete the 'saveThePrisoner' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 *  3. INTEGER s
 */

function saveThePrisoner(n, m, s) {
  // Write your code here
  return ((s + m - 2) % n) + 1 || n;
}
const [n1, m1, s1] = [5, 2, 1]; // 2
console.log(saveThePrisoner(n1, m1, s1));
