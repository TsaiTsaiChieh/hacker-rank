function utopianTree(n) {
  // Write your code here
  // spring: =* 2, summer: =+ 1
  let height = 1
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) height *= 2
    else if (i % 2 === 0) height += 1
  }
  return height
}
console.log(utopianTree(0)) // 1
console.log(utopianTree(1)) // 2
console.log(utopianTree(3)) // 6
console.log(utopianTree(4)) // 7