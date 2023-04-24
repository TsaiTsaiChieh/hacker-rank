// n chapter
// each page up k problems, last page fewer than k problems
// page number index starts at 1
// special problem is index === page number
function workbook(n, k, arr) {
  let record = {};
  let page = 1;

  // Write your code here
  const totalPage = arr.reduce((pre, ele) => pre + Math.ceil(ele / k), 0);
  const totalProblem = arr.reduce((pre, ele) => pre + ele, 0);
  for (let page = 1; page <= totalPage; page++) {
    record[page] = [];
  }
  for (let j = 0; j < n; j++) {
    let problemIdx = 1;
    let pageIdx = 1;
    const ele = arr[j];
    while (problemIdx <= ele && totalProblem > 0) {
      record[pageIdx].push(problemIdx);
      problemIdx++;
    }
  }
  return record;
}
const [n1, k1, arr1] = [5, 3, [4, 2, 6, 1, 10]]; // 4
console.log(workbook(n1, k1, arr1));
