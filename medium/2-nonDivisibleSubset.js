/*
 * Complete the 'nonDivisibleSubset' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY s
 */

function nonDivisibleSubset(k, s) {
  // Write your code here
  const record = []
  s = [...new Set(s)]
  console.log(s, s.length)
  for (let i = 0; i < s.length; i++) {
    record[i] = []
  }
  for (let i = 0; i < s.length; i++) {
    record[i].push(s[i])
  }
  for (let i = 0; i < s.length; i++) {
    console.log(s[i],'-')
    // console.log(s[i], record[i][0],'--')
    if (record[i][0] !== s[i] ) {
      // console.log(s[i],'=')
      // if (((record[i][0] + s[i]) / k)%1 !== 0  ) record[i].push(s[i])
    }
    
  }
  console.log(record)
  console.log(s)
}
const [k1, s1] = [3, [ 1, 7, 2, 4 ]] // 3
console.log(nonDivisibleSubset(k1, s1))