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
  let hit = 0;
  for (let i = a; i <= b; i++) {
    // console.log(i,Math.sqrt(i))
    if (Math.sqrt(i) % 1 === 0) hit++;
  }
  return hit;
}

const [a1, b1] = [3, 9];
console.log(squares(a1, b1)); // 2
const [a2, b2] = [17, 24];
console.log(squares(a2, b2)); // 0
