// append or delete the letter to the end of the string
/*
 * Complete the 'appendAndDelete' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. STRING t
 *  3. INTEGER k
 */
function appendAndDelete(s, t, k) {
  // Write your code here
  let op = 0;
  for (let i = 0; i < t.length; i++) {
    if (t[i] !== s[i]) {
      op = i - 1 + (t.length - i);
      break;
    }
  }
  if (op === 0) {
    for (let i = 0; i < s.length; i++) {
      if (t[i] !== s[i]) {
        op = i - 1 + (s.length - i);
        break;
      }
    }
  }

  return op > k ? "No" : "Yes";
}

const [s1, t1, k1] = ["hackerhappy", "hackerrank", 9]; // Yes
console.log(appendAndDelete(s1, t1, k1));
const [s2, t2, k2] = ["ashley", "ash", 2]; // No
console.log(appendAndDelete(s2, t2, k2));
