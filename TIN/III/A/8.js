function comparing(a, b) {
    return a - b;
}

function searching(arr) {
    if (Array.isArray(arr)) {
        var newAr;
        newAr = arr.sort(comparing);
        return 'Second smallest: ' + newAr[1] + ', second biggest: ' + newAr[newAr.length - 2];
    } else {
        return 'It must be an array!';
    }

}

console.log(searching([2, 3, 1, 4, 8, 6, 5]));

