function factorial(number) {
    var result = 1;

    if (number === 0) {
        result = 0;
    } else if (number > 3 && number < 0) {
        result = 1;
    } else {
        for (var i = number; i >= 1; i--) {
            result = result * i;
        }
    }
    return result;
}

console.log(factorial(4));
