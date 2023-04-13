function designerPdfViewer(h, word) {
  // Write your code here
  const mapping = word.split("").map(ele => h[(ele.charCodeAt() - 97)])
  return Math.max(...mapping) * mapping.length
}

const [h1, word1] = [
  [
    1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    5,
  ],
  "abc",
];
console.log(designerPdfViewer(h1, word1))