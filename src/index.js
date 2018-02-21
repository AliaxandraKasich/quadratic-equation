module.exports = function solveEquation(equation) {
 
  var tempArr = equation.split(' ');
  var a = tempArr[0];
  var b = tempArr[4];
  var c = tempArr[8];
  if(tempArr[3] === "-"){
    b = (-1)*b;
  }
  if(tempArr[7] === "-"){
    c = (-1)*c;
  }
  var dicr = b*b - 4*a*c;
  var x2 = ((b*(-1))-Math.sqrt(dicr))/(2*a);
  var x1 = ((b*(-1))+Math.sqrt(dicr))/(2*a);
  var arr = [];
  x1 = Math.round(x1);
  x2 = Math.round(x2);
  arr.push(x1);
  arr.push(x2);
  if(arr[0]>arr[1]){
    var temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
  }
  return arr;



}
