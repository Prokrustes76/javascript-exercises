const findTheOldest = function(arr) {
    return arr.sort((a, b) => (b.yearOfDeath || 2022 - b.yearOfBirth) - 
    (a.yearOfDeath || 2022 - a.yearOfBirth)) [0]
};

// Do not edit below this line
module.exports = findTheOldest;
