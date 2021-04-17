/**
 * @param {string} digits
 * @return {string[]}
 */
const recursive = () => {

}

var letterCombinations = function (digits) {
    if (!digits.length) {
        return [];
    }

    const phoneMap = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz',
    }
    const answer = []
    for (let i = 0; i < digits.length; i++) {
        const number = digits[i]

    }
};

letterCombinations('23')