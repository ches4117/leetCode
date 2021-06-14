/**
 * @param {string} s
 * @param {string} p
 * @param {number[]} removable
 * @return {number}
 */
var maximumRemovals = function (s, p, removable) {
  const rec = {}
  let answer = 0
  let pLast = p.split('').length - 1
  let pFirst = 0
  let flag = false

  for (let i = 0; i < s.length; i++) {
    rec[s[i]] = [...(rec[s[i]] || []), i]
  }

  for (let removeIndex of removable) {
    rec[s[removeIndex]] = rec[s[removeIndex]].filter(index => index !== removeIndex)
    for (let char of p) {
      if (rec[char].length === 0) {
        flag = true
      }
    }

    while (pFirst < pLast) {
      if ((Math.min(rec[p[pFirst]]) > Math.max(rec[p[pLast]])) || !rec[p[pFirst]].length || !rec[p[pLast]].length) {
        flag = true
        break
      }
      pFirst += 1
      pLast -= 1
    }

    if (flag) break

    pLast = p.length - 1
    pFirst = 0
    answer += 1
  }

  return answer
};