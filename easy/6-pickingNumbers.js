function pickingNumbers(a) {
  const freq = new Array(100).fill(0); // assuming the range of integers is between 0 and 100
  let maxLength = 0;
  // calculate frequency of each element
  for (const num of a) {
    freq[num]++;
  }
  console.log(freq);
  for (let i = 0; i < freq.length - 1; i++) {
    const j = i + 1;
    maxLength = Math.max(maxLength, freq[i] + freq[j]);
  }
  return maxLength;
}
const [a1, a2] = [
  [4, 6, 5, 3, 3, 1],
  [1, 2, 2, 3, 1, 2],
];
console.log(pickingNumbers(a1)); // 3
console.log(pickingNumbers(a2)); // 5
