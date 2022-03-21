/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  const answer = [[1]];
  if (numRows === 1) return answer;

  for (let i = 1; i < numRows; i++) {
    const previousArray = answer[i - 1];
    const nowArray = [];
    for (let j = 0; j <= previousArray.length; j++) {
      nowArray.push((previousArray[j] || 0) + (previousArray[j - 1] || 0));
    }
    answer.push(nowArray);
  }

  return answer;
};
