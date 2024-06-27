const removeFromArray = function(array) {
    const elementsToRemove = Array.from(arguments)
    elementsToRemove.shift();
    for (element of elementsToRemove) {
        let index = array.indexOf(element)
        while (index != -1) {
            array.splice(index, 1,);
            index = array.indexOf(element);
        }
    }
    return array;
};
console.log(removeFromArray([1, 1, 4, 2], 1, 4))
// Do not edit below this line
module.exports = removeFromArray;
