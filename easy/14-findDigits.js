/*
 * Complete the 'findDigits' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function findDigits(n) {
  // Write your code here
  let divisors = 0;
  let record = [];
  const n2str = String(n);
  for (let i = 0; i < n2str.length; i++) {
    if (n % parseInt(n2str[i]) === 0) divisors++;
  }

  return divisors;
}

const n1 = 12;
console.log(findDigits(n1)); // 2
const n2 = 1012;
console.log(findDigits(n2)); // 2
