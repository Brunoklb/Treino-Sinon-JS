function sum(numberOne, numberTwo, log){
    let result = numberOne+numberTwo;
    log(result)
    return result;
}

module.exports = sum;