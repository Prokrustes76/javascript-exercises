const fibonacci = function(n = n * 1) {
    if (isNaN(n)) return "OOPS"

    let arr = [1, 1]
    for (let i = 2; i < n; i++)
      arr.push(arr[i - 1] + arr[i - 2])
    
    return arr[arr.length - 1]
};

// Do not edit below this line
module.exports = fibonacci;
