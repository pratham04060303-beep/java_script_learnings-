
// as java script has two phases at first all the variables are stored in memory (variable enviornment ) as  undefined anf funtions are stored as it is 

console.log("before initialization ");
console.log(x);
print_name();
console.log(print_name);

var x = 2;

function print_name() {
    console.log("namaste javascript ");
}

    console.log("after initialization ");

console.log(x);
print_name();
console.log(print_name);


