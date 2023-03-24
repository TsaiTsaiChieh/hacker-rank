/*
 * Complete the '1.' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

function climbingLeaderboard(ranked, player) {
  // Write your code here
  const scores = Array.from(new Set(ranked))
  const playerRank = []
  for (const playerScore of player) {
    while (scores && playerScore >= scores[scores.length - 1])
      scores.pop()
    playerRank.push(scores.length + 1)
  }
  return playerRank
}

const ranked1 = [100, 90, 90, 80]
const player1 = [70, 80, 105] // [4, 3, 1]
console.log(climbingLeaderboard(ranked1, player1))