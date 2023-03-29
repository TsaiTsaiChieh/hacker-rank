function getMoneySpent(keyboards, drives, b) {
  /*
   * Write your code here.
   */
  keyboards = keyboards.sort()
  drives = drives.sort()
  const max1 = Math.max(...keyboards)
  const max2 = Math.max(...drives)
  const goal1 = b - max1
  const goal2 = b - max2
  const closest1 = drives.reverse().find(ele => ele <= goal1)
  const closest2 = keyboards.reverse().find(ele => ele <= goal2)
  const ans1 = closest1 + max1
  const ans2 = closest2 + max2
  if (!ans1 && !ans2) return -1
  else if (ans1 > ans2) return ans1
  else return ans2
}

const [keyboards1, drives1, b1] = [[3, 1], [5, 2, 8], 10]
console.log(getMoneySpent(keyboards1, drives1, b1)) // 9