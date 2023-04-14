function permutationEquation(p) {
  // Write your code here
  let ans = []
  for (let i = 1; i <= p.length; i++) {
    const firstIdx = p.indexOf(i) + 1
    ans.push(p.indexOf(firstIdx) + 1)
  }
  return ans
}

console.log(permutationEquation([4, 3, 5, 1, 2])) // [1, 3, 5, 4, 2]