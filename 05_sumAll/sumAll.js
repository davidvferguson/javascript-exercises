const sumAll = function(a, b) {
    let i = a;
    if (a < 0 || b < 0 || typeof a != "number" || typeof b != "number") {
        return "ERROR"
    };
    if (a > b) {
        while (i > b){
            i--;
            a += i;
        }
    }
    while (i < b){
        i++;
        a += i;
    }
    let total = a;
    return total;
};



// Do not edit below this line
module.exports = sumAll;
