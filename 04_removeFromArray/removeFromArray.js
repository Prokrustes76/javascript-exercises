const removeFromArray = function(arr, ...strangers) {
    return arr.filter(a => !strangers.includes(a))
};

// Do not edit below this line
module.exports = removeFromArray;
