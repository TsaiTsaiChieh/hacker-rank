function aVeryBigSum(ar) {
  return ar.reduce((prev, curr) => prev + curr, 0);
}
const ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]; // 5000000015
console.log(aVeryBigSum(ar));
