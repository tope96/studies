function comparing(a, b) {
    return b - a;
}

function money(amount, nom) {
    nom.sort(comparing);
    var temp = false;
    var result = '';
    var am = 0;
    for (var i = 0; i < nom.length; i++) {
        amount = amount - am;
        am = 0;
        temp = false;
        for (var j = 1; temp == false; j++) {
            if ((nom[i] * j) > amount) {
                temp = true;
            } else {
                am = am + nom[i];
                result += nom[i] + ' ';
                temp = false;
            }
        }
    } return result;
}

console.log(money(46, [25, 10, 5, 2, 1]));
