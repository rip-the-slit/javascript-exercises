const palindromes = function (str) {
    const originalStr = str
        .split("")
        .filter((char) => char != " " && char != "," && char != "." && char != "!")
        .join("")
        .toLowerCase()
    const reversedStr = originalStr
        .split("")
        .reverse()
        .join("")
    return reversedStr === originalStr
};
console.log(palindromes('Racecar!'))
// Do not edit below this line
module.exports = palindromes;
