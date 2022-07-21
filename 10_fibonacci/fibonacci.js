const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS";
    }

    if (n === 0) {
        return 0;
    }

    let pp = 1,
        previous = 0,
        result = 0;
    for (let i = 0; i < n; i++) {
        result = pp + previous;
        pp = previous;
        previous = result;
    }

    return result;
};

// Do not edit below this line
module.exports = fibonacci;
