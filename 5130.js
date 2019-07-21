/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
    let rec_hash = {}
    let answer = 0
    for( let key in dominoes) {
        if (dominoes[key][0] > dominoes[key][1]) {
            let tmp =  dominoes[key][0]
            dominoes[key][0] = dominoes[key][1]
            dominoes[key][1] = tmp
        }
        if (rec_hash[dominoes[key]] !== undefined) {
            rec_hash[dominoes[key]] += 1
        } else {
            rec_hash[dominoes[key]] = 1
        }
    }

    for (let key in rec_hash) {
        if (rec_hash[key] > 1) {
            if (rec_hash[key] == 2) {
                answer += 1
            } else {
                answer += rec_hash[key] * (rec_hash[key] - 1) / 2
            }
        }
    }

    if (answer == 2) {
        answer = 1
    }
    return answer
};

console.log(numEquivDominoPairs([[2,1],[1,2],[1,2],[1,2],[2,1],[1,1],[1,2],[2,2]]))