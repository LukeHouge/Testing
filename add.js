let operation = {};

operation.sub = function(value1, value2) {
    return value1 - value2;
}
operation.add = function(value1, value2) {
    return parseFloat(value1) + parseFloat(value2);
}
operation.div = function(value1, value2) {
    return value1 / value2;
}
operation.mult = function(value1, value2) {
    return value1 * value2;
}

module.exports = operation;