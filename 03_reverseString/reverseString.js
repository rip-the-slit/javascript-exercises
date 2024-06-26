const reverseString = function(text) {
    let reversedText = "";
    // this loop iterates through the negative indexes of text, slices the character
    // in each index and directly adds it to the returned string
    for (let i = -1; i >= -(text.length); i--) {
            let slicedText = text.substr(i, 1)
            reversedText += slicedText;
    }
    return reversedText;
};
console.log(reverseString("hiiii"))
// Do not edit below this line
module.exports = reverseString;
