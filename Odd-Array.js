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
    return binary.toString().replace(/,/g, "");
}

document.writeln("The maximum separation is: " + sep);

