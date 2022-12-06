const caesar = function(str, num) {
    let abc      = 'abcdefghijklmnopqrstuvwxyz'
    let solution = ''

    for (let i = 0; i < str.length; i++) {
        if (!abc.includes(str[i].toLowerCase())) {
            solution += str[i]
            continue
        }
        let index = (abc.indexOf(str[i].toLowerCase()) + num) % abc.length
        solution += str[i] == str[i].toLowerCase() ? abc[index] :
                                                     abc[index].toUpperCase()
    }
    return solution
};

// Do not edit below this line
module.exports = caesar;
