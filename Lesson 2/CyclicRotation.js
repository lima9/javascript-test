var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var times = 3;

function shiftArrayToRight(array, times) {
    for (var i = 0; i < times; i++) {
        array.unshift(array.pop());
    }
  return array;
}


document.writeln("We have the following Array: " + array);
document.writeln("It will be shifted: " + times);
var arry = shiftArrayToRight(array, times);
document.writeln("We have the following shifted Array: " + arry);






/*
The idea was to rotate only once to the right and then repeat the process k times.
Didn't work...
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var k = 3;

function rightShift(arr) {
    var temp = 0;
    temp = arr[0];
    arr[0] = arr[arr.length - 1];
    for (var i = 1; i < arr.length; i++) {
        var tempo;
        var su = arr[i];
        arr[i] = tempo;
        tempo = arr[i + 1];
        if (i == 1) {
            tempo = arr[i];
            arr[i] = temp;
        } else {
            console.log(tempo);
        }
    }
    document.writeln("----" + arr);
}

function solution(arr, k) {
    while (k !== 0) {
        rightShift(arr);
        k--;
    }

}

document.writeln("We have the following Array: " + arr + "----" + un);
document.writeln("It will be shifted: " + k);
var arry = solution(arr, k);
var un = rightShift(arr);
document.writeln("We have the following shifted Array: " + arry);
*/