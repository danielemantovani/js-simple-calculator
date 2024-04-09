/**
 * Description
 * @param {number} num1
 * @param {number} num2
 * @param {string} operations
 * @returns {number}
 */
function caluclator (num1, num2, operations){

    let result = 0;
    num1 = parseInt (num1);
    num2 = parseInt (num2);

    switch (operations) {
        case "+": result = num1 + num2; break;
        case "-": result = num1 - num2; break;
        case "*": result = num1 * num2; break;
        case "/": result = num1 / num2; break;
        default : result = null
    }
    return result;
}