function permutationEquation(p) {
  // Write your code here
  let mapping = []
  let ans = []
  for (let i = 1; i <= p.length; i++) {
    mapping.push(p.indexOf(i) + 1)
  }
  for (let i = 0; i < p.length; i++) {
    ans.push(p.indexOf(mapping[i]) + 1)
  }
  return ans
}

// console.log(permutationEquation([2, 3, 1])) // [2, 3, 1]
console.log(permutationEquation([4, 3, 5, 1, 2])) // [1, 3, 5, 4, 2]