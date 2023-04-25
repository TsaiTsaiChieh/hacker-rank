// n chapter
// each page up k problems, last page fewer than k problems
// page number index starts at 1
// special problem is index === page number
function workbook(n, k, arr) {
  let specialProblems = 0;
  let page = 1;
  for (let i = 0; i < n; i++) {
    const problemsPerChapter = arr[i];
    const pagePerChapter = Math.ceil(problemsPerChapter / k);
    let firstProblemIdx = 1;
    let lastProblemIdx = k;
    for (let j = 1; j <= pagePerChapter; j++) {
      if (
        firstProblemIdx <= page &&
        page <= Math.min(problemsPerChapter, lastProblemIdx)
      ) {
        specialProblems++;
      }
      page++;
      firstProblemIdx = lastProblemIdx + 1;
      lastProblemIdx += k;
    }
  }
  return specialProblems;
}
const [n1, k1, arr1] = [5, 3, [4, 2, 6, 1, 10]]; // 4
console.log(workbook(n1, k1, arr1));
