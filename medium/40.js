var combinationSum2 = function (candidates, target) {
  var result = [];
  var path = [];
  var helper = function (sum, startIndex) {
    if (sum === target) {
      result.push([...path]);
      return;
    }
    for (var i = startIndex; i < candidates.length && candidates[i] + sum <= target; i++) {
      if (i > startIndex && candidates[i] === candidates[i - 1]) continue;
      path.push(candidates[i]);
      helper(sum + candidates[i], i + 1);
      path.pop();
    }
    return;
  }
  candidates.sort((a, b) => a - b);
  helper(0, 0);
  return result;
};