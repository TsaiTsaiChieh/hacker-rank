function designerPdfViewer(h, word) {
  // Write your code here
  const mapping = word.split("").map(ele => h[(ele.charCodeAt() - 97)])
  return Math.max(...mapping) * mapping.length
}

// ai
function designerPdfViewer1(h, word) {
  let maxHeight = 0
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    const charHeight = h[char.charCodeAt(0) - 97]
    maxHeight = Math.max(maxHeight, charHeight)
  }
  return maxHeight * word.length
}
const [h1, word1] = [
  [
    1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
    5,
  ],
  "abc",
];
console.log(designerPdfViewer(h1, word1))
console.log(designerPdfViewer1(h1, word1))