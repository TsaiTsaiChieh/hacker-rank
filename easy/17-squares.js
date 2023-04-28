/*
 * Complete the 'squares' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER a
 *  2. INTEGER b
 */
function squares(a, b) {
  // Write your code here
  return Math.floor(Math.sqrt(b)) - Math.ceil(Math.sqrt(a)) + 1;
}

const [a1, b1] = [3, 9];
console.log(squares(a1, b1)); // 2
const [a2, b2] = [17, 24];
console.log(squares(a2, b2)); // 0
