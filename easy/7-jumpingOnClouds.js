function jumpingOnClouds(c, k) {
  let energy = 100
  const loop = Math.ceil(c.length / k)
  console.log(loop)
  for (let i = 0; i < loop; i++) {
    if (c[i * k] === 0) energy -= 1
    else if (c[i * k] === 1) energy -= 3
  }
  return energy
}

const [c1, k1] = [[0, 0, 1, 0, 0, 1, 1, 0], 2];
const [c2, k2] = [[1, 1, 1, 0, 1, 0, 0, 0], 3];
const [c3, k3] = [[0, 0, 1, 0], 2];
console.log(jumpingOnClouds(c1, k1)) // 92
console.log(jumpingOnClouds(c2, k2)) // 80
console.log(jumpingOnClouds(c3, k3)) // 96