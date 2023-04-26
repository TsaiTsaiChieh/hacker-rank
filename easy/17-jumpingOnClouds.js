// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c, k) {
  let energy = 100;
  let idx = 0;
  do {
    idx = (idx + k) % c.length;
    energy--;
    if (c[idx] === 1) energy -= 2;
  } while (idx !== 0);
  return energy;
}

const [c1, k1] = [[0, 0, 1, 0, 0, 1, 1, 0], 2];
console.log(jumpingOnClouds(c1, k1)); // 92
const [c2, k2] = [[1, 1, 1, 0, 1, 1, 0, 0, 0, 0], 3];
console.log(jumpingOnClouds(c2, k2));
