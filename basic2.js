
get_disc();
console.log(x);
console.log(get_disc);
console.log(get_num);                    //  this also assigns undefined in memory first 
get_num();                                           // cannot call functio like that it is arrow function 

var x = 7;

// two ways of function declaration 

function get_disc() {
console.log("javascript is synchronous single threaded language ");
}

var get_num = () => {                                  // arrow function 
console.log(x);
}