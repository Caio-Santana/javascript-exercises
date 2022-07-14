const sumAll = function (firstArg, secondArg) {
    const notAInteger = !Number.isInteger(firstArg) || !Number.isInteger(secondArg);
    const negative = (firstArg < 0) || (secondArg < 0);
    if (notAInteger || negative) {
        return 'ERROR';
    }

    let start = firstArg,
        end = secondArg;
    if (firstArg > secondArg) {
        start = secondArg;
        end = firstArg;
    }

    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
