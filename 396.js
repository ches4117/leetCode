/**
 * @param {number[]} A
 * @return {number}
 */
var maxRotateFunction = function (A) {
  let max = null
  let B = A.slice()
  let length = A.length
  let init_length = A.length

  while (length) {
    length -= 1
    let sum = 0
    for (let i = 0; i < init_length; i++) {
      sum += (i * B[i])
    }
    if(!max || sum > max) max = sum
    B.splice(0,  0, B[init_length - 1])
    B.splice(init_length, 1)
  }
  return max
}
