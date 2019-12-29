/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let length = s.length
    let answer = ''
    if(length == 1) {
        return s
    } else {
        for(let i = 0; i < length / 2; i++) {
            let max = 0

            for(let j = i; j < length / 2; j++) {
                if(s[j] == s[length - j - 1]) {
                    max += 1
                } else {
                    max = 0
                    break
                }
            }

            if( max > answer.length) {
                answer = s.slice(i, length - i)
            }
        }
    }

    if(answer.length == 0 && s.length > 0) {
        answer = s[0]
    }

    return answer
};

console.log(longestPalindrome("abb"))