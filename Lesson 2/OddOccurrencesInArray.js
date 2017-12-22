var arr = [1, 2, 2, 1, 3, 4, 5, 6, 7, 5, 6, 7, 3];

function bubbeSort(arr) {
  var d = false;
  while (!d) {
    d = true;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i - 1] > arr[i]) {
        d = false
        var tmp = arr[i - 1];
        arr[i - 1] = arr[i];
        arr[i] = tmp;
      }
    }
  }
  return arr;
}

function solution(num) {
  var length = arr.length;
  if (length % 2 === 0) {
    alert("Not odd length");
  }
  //We know that it is already sorted and of odd lenght
  var found = 0;
  var foundy = true;
  while (!foundy)
    foundy = true;
  for (var j = 0; j < num.length; j++) {
    if (num[j] == num[j + 1]) {
      j++;
      foundy = false;
    } else if (num[j] != num[j + 1]) {
      found = num[j];
      foundy = true;
    }
  }
  return found;
}

document.writeln("We have the following Array: " + arr);
var or = bubbeSort(arr);
var value = solution(or);
document.writeln("The sorted array looks like this: " + or);
document.writeln("The value that has no pair is: " + value);