// code to understand how execution contex are made and what is flow of programm 

console.log(x);                           //  before initialization it is undefined 

var x = 1;               

a();
b();
//a();
console.log(x);

function a() {
var x  = 10;
console.log(x);
}

function b() {
var x = 100;
console.log(x);
}

