/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
  let ans = [0, 0];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) ans[0] += 1;
    else if (a[i] < b[i]) ans[1] += 1;
  }
  return ans;
}

const [a, b] = [[5, 6, 7], [3, 6, 10]] // [1, 1]
console.log(compareTriplets(a, b));