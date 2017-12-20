/**This returns the binary representation of the input  */
function solution(num) {
    var binary = [];
    while (num !== 0) {
        document.writeln(num);
        if (num % 2 === 0) {
            binary.push(0);
        } else if (num % 2 == 1) {
            binary.push(1);
        }
        if (num >= 2) {
            num = num / 2;
            num = Math.floor(num);
        } else if (num < 2 && num > 1) {
            num = 1;
        } else {
            num = 0;
        }
    }
    return reverse(binary.toString().replace(/,/g, ""));
}

function reverse(string) {

    var reversed = [];
    var i = string.length - 1;
    while (i !== 0) {
        reversed.push(string[i]);
        i--;
    }
    reversed.push(string[0]);
    return reversed.toString().replace(/,/g, "");
}

function maxsep(rever) {
    rever = rever.toString();
    var max = 0;
    var mis = 0;
    var positions = [];
    for (var i = 0; i < rever.length; i++) {
        if (rever[i] == 1) {
            positions.push(i);
        }
    }
    for (var j = 0; j < positions.length; j++) {
        mis = positions[j + 1] - positions[j];
        if (mis > max) {
            max = mis;
        }
    }
    max = max - 1;
    return max;
}

document.writeln("Number Entered:\n " + 37389 + "\n");
var binary = solution(37389);
document.writeln("This is the binary representation of your number: " + rever);
//var sep = maxsep(rever);
//document.writeln("The maximum separation is: " + sep);