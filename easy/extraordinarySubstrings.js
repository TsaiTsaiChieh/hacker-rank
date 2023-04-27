function countSubstrings(str) {
  const map = {
    a: 1,
    b: 1,
    c: 2,
    d: 2,
    e: 2,
    f: 3,
    g: 3,
    h: 3,
    i: 4,
    j: 4,
    k: 4,
    l: 5,
    m: 5,
    n: 5,
    o: 6,
    p: 6,
    q: 6,
    r: 7,
    s: 7,
    t: 7,
    u: 8,
    v: 8,
    w: 8,
    x: 9,
    y: 9,
    z: 9,
  };
  let ans = str.length;
  const combination = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 2; j < str.length + 1; j++) {
      const sub = str.substring(i, j);
      combination.push(sub);
    }
  }
  for (let i = 0; i < combination.length; i++) {
    let sum = 0;
    combination[i].split("").forEach((ele) => {
      sum += map[ele];
    });
    if ((sum / combination[i].length) % 1 === 0) ans++;
  }
  return ans;
}
const str1 = "asdf";
console.log(countSubstrings(str1)); // 6
const str2 = "aaaaaaaaaa";
console.log(countSubstrings(str2)); // 5
