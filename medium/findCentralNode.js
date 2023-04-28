// STDIN     FUNCTION
// -----     -----
// 5 4    -> N = 5, N-1 = 4
// 1 2 15 -> A = 1, B = 2, W = 15
// 1 3 10 -> A = 1, B = 3, W = 10
// 2 4 20 -> A = 2, B = 4, W = 20
// 2 5 25 -> A = 2, B = 5, W = 25
// 2      -> Z = 2
// 3      -> Y = 3
// 4      -> Z = 4
/* 

Node
Complete the 'findCentralNode' function below.

The function is expected to return an INTEGER.
The function accepts following parameters:
1. WEIGHTED_INTEGER_GRAPH tree
2. INTEGER x
3. INTEGER y
4. INTEGER z

For the weighted graph, <name>: 
1. The number of nodes is <name>Nodes
2. The number of edges is <name>Edges.
3. An edge exists between <name>From[i] and <name>To[i]
The weight of the edge is <name>Weight[i]
*/
const getAllIndexes = (arr, target) => {
  const indexes = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) indexes.push(i);
  }
  return indexes;
};

function findCentralNode(treeNodes, treeFrom, treeTo, treeWeight, x, y, z) {
  const costs = [];
  const dist = (u, v, parent) => {
    if (u === v) return 0;
    for (let i = 0; i < treeNodes - 1; i++) {
      if (
        (treeFrom[i] === u && treeTo[i] === v) ||
        (treeFrom[i] === v && treeTo[i] === u)
      )
        return treeWeight[i];
    }

    for (let i = 0; i < treeNodes - 1; i++) {
      if (treeFrom[i] === v && treeTo[i] !== parent) {
        let d = dist(u, treeTo[i], v);
        if (d !== Infinity) {
          return d + treeWeight[i];
        }
      }
      if (treeTo[i] === v && treeFrom[i] !== parent) {
        let d = dist(u, treeFrom[i], v);
        if (d !== Infinity) {
          return d + treeWeight[i];
        }
      }
    }
    return Infinity;
  };
  for (let i = 1; i <= treeNodes; i++) {
    const dx = dist(i, x);
    const dy = dist(i, y);
    const dz = dist(i, z);
    console.log(`C(${i},${x}) + C(${i},${y}) + C(${i},${z})`, dx, dy, dz);
    const sum = dx + dy + dz;
    costs.push(sum);
  }
  return costs.indexOf(Math.min(...costs)) + 1;
}
const [treeNodes1, treeFrom1, treeTo1, treeWeight1, x1, y1, z1] = [
  5,
  [1, 1, 2, 2],
  [2, 3, 4, 5],
  [15, 10, 20, 25],
  2,
  3,
  4,
];
console.log(
  findCentralNode(treeNodes1, treeFrom1, treeTo1, treeWeight1, x1, y1, z1)
); // 2

const [treeNodes2, treeFrom2, treeTo2, treeWeight2, x2, y2, z2] = [
  3,
  [1, 2],
  [2, 3],
  [2, 10],
  1,
  2,
  3,
];
console.log(
  findCentralNode(treeNodes2, treeFrom2, treeTo2, treeWeight2, x2, y2, z2)
); // 2
