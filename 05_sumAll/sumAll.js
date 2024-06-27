const sumAll = function(operand1, operand2) {
    // checks if any of the operands is negative or not a number
    if (operand1 < 0 || operand2 < 0 
        || typeof operand1 != "number" 
        || typeof operand2 != "number") {
        return "ERROR";
    }
    let sum = operand2;
    for (let i = operand1; i != operand2; 
        ((operand1 < operand2) ? i++ : i--)) { //decides the direction of the step
            sum += i;
    }
    return sum;
};

sumAll(1,6)
// Do not edit below this line
module.exports = sumAll;
