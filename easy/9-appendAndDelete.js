// append or delete the letter to the end of the string
/*
 * Complete the 'appendAndDelete' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s initial
 *  2. STRING t desired
 *  3. INTEGER k
 */
function appendAndDelete(s, t, k) {
  let commonChars = 0;
  while (commonChars < s.length && commonChars < t.length && s.charAt(commonChars) === t.charAt(commonChars)) {
      commonChars++;
  }
  let appendOps = t.length - commonChars;
  let deleteOps = s.length - commonChars;
  let totalOps = appendAndDelete + deleteOps;
  if (k >= s.length + t.length || k >= totalOps && (k - totalOps) % 2 == 0) {
      return "Yes";
  } else {
      return "No";
  }
}

const [s1, t1, k1] = ["hackerhappy", "hackerrank", 9]; // Yes
console.log(appendAndDelete(s1, t1, k1));
const [s2, t2, k2] = ["ashley", "ash", 2]; // No
console.log(appendAndDelete(s2, t2, k2));
const [s3, t3, k3] = ["aaaaaaaaaa", "aaaaa", 7]; // Yes
console.log(appendAndDelete(s3, t3, k3));
const [s4, t4, k4] = ["zzzzz", "zzzzzzz", 4]; // Yes
console.log(appendAndDelete(s4, t4, k4)); 
const [s5, t5, k5] = ["abcd", "abcdert", 10]; // No
console.log(appendAndDelete(s5, t5, k5)); 