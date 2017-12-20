var arr = [1,2,2,1,3,4,5,6,7,5,6,7,3];
//The alone value is 4 in arr[5]



function sortArray(array) {
  var done = false;
  while (!done) {
    done = true;
    for (var i = 1; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        var tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }

 
  
  document.writeln("ii " + array);
    
   return array;
}

function solution(num) {
    
    //document.writeln("re  " + num)
	var length = arr.length;
    var alone = 0;
    
    if (length % 2 === 0){
    	alert("Not odd length");
    }
    
    /*for (var i = 0; i < length; i ++){
        for (var j = 1; j < length; j++){
            if (num[i] === num[j]){
               document.writeln(num[i] + "+"+ num[j] + "___");
            }
            //document.write("   Para i: " + 1 + "Tenemos las siguientes j: " + j);

         }
     }*/
    //alert(num[5]);
    //alert(alone);
    
    return length;
}

//document.writeln("We have the following Array: " + arr);
var value = solution(arr);
var or = sortArray(arr);
//document.writeln(or);
//document.writeln("The value that has no pair is: " + value);