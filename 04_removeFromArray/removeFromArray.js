const removeFromArray = function () {
    let numberOfArgs = arguments.length;
    let argsArray = Array.from(arguments);
    const array = argsArray[0];
    for (let i = 1; i < numberOfArgs; i++) {
        let index = array.indexOf(argsArray[i]);
        if (index < 0) {
            continue;
        }
        if (typeof (argsArray[i]) === typeof (array[index])) {
            array.splice(index, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
