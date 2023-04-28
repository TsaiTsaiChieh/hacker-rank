function minCost(rows, cols, initR, initC, finalR, finalC, costRows, costCols) {
  let ans = 0
  for (let i = initR; i < finalR; i++) {
    ans += costRows[i]
  }
  for (let i = initC; i < finalC; i++) {
    ans += costCols[i]
  }
  return ans
  // const grid = [];
  // for (let i = 0; i < rows; i++) {
  //   grid.push(new Array(cols).fill(Number.MAX_SAFE_INTEGER));
  // }
  // grid[initR][initC] = 0;

  // const queue = [[initR, initC]];
  // const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];

  // while (queue.length > 0) {
  //   const [r, c] = queue.shift();

  //   if (r === finalR && c === finalC) {
  //     return grid[r][c];
  //   }

  //   for (const [dr, dc] of directions) {
  //     const nr = r + dr;
  //     const nc = c + dc;

  //     if (nr < 0 || nr >= rows || nc < 0 || nc >= cols) {
  //       continue;
  //     }

  //     const cost = grid[r][c] + (dr === -1 ? costRows[nr] : (dr === 1 ? costRows[nr - 1] : (dc === -1 ? costCols[nc] : costCols[nc - 1])));

  //     if (cost < grid[nr][nc]) {
  //       grid[nr][nc] = cost;
  //       queue.push([nr, nc]);
  //     }
  //   }
  // }

  // return -1;

}

// const [rows1, cols1, initR1, initC1, finalR1, finalC1, costRows1, costCols1] = [4, 4, 1, 0, 2, 3, [1, 2, 3], [4, 5, 6]]
const [rows1, cols1, initR1, initC1, finalR1, finalC1, costRows1, costCols1] = [6, 6, 1, 1, 4, 5, [1, 3, 1, 3, 2], [2, 1, 3, 2, 1, 1]];
console.log(minCost(rows1, cols1, initR1, initC1, finalR1, finalC1, costRows1, costCols1)) // 17
const [rows2, cols2, initR2, initC2, finalR2, finalC2, costRows2, costCols2] = [3, 3, 0, 0, 1, 2, [2, 5], [6,1]]
// console.log(minCost(rows2, cols2, initR2, initC2, finalR2, finalC2, costRows2, costCols2)) // 9
const [rows3, cols3, initR3, initC3, finalR3, finalC3, costRows3, costCols3] = [5, 6, 0, 0, 4, 5, [4, 2, 6, 5], [1, 2, 4, 3, 5]] // 32
// console.log(minCost(rows3, cols3, initR3, initC3, finalR3, finalC3, costRows3, costCols3))

// const [rows4, cols4, initR4, initC4, finalR4, finalC4, costRows4, costCols4] = [3, 3, 0, 0, 2, 2, [1, 2], [1,2]] 
// console.log(minCost(rows4, cols4, initR4, initC4, finalR4, finalC4, costRows4, costCols4)) // 5