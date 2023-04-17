function jumpingOnClouds(c, k) {
  let currIdx = 0
  let energy = 100
  do {
    currIdx = (currIdx + k) % c.length
    energy--
    if (c[currIdx] === 1) {
      energy -= 2
    }
  } while (currIdx !== 0);
  return energy
}

const [c1, k1] = [[0, 0, 1, 0, 0, 1, 1, 0], 2];
const [c2, k2] = [[1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3];
const [c3, k3] = [[0, 0, 1, 0], 2];
console.log(jumpingOnClouds(c1, k1)) // 92
console.log(jumpingOnClouds(c2, k2)) // 80
console.log(jumpingOnClouds(c3, k3)) // 96