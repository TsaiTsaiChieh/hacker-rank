function viralAdvertising(n) {
  // Write your code here
  let cumulative = 0
  let shared = 5
  for (let i = 0; i < n; i++) {
    const like = Math.floor(shared / 2)
    cumulative += like
    shared = like * 3
  }
  return cumulative
}


console.log(viralAdvertising(1)) // 2
console.log(viralAdvertising(3)) // 9