"use strict";
/*Declare two variables x and y with numerical values. Swap their values without using a third variable*/
Object.defineProperty(exports, "__esModule", { value: true });
function swap1(x, y) {
    x = x + y; //11
    y = x - y; //11-6=5
    x = x - y; //11-5=6
    // return [x,y];
    console.log(x, y);
}
(swap1(5, 6));
//get user input
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function swap(x, y) {
    x = x + y;
    y = x - y;
    x = x - y;
    console.log("Swapped values: x =", x, ", y =", y);
}
rl.question("Enter the first number (x): ", function (inputX) {
    var x = parseInt(inputX, 10);
    rl.question("Enter the second number (y): ", function (inputY) {
        var y = parseInt(inputY, 10);
        if (!isNaN(x) && !isNaN(y)) {
            swap(x, y);
        }
        else {
            console.log("Please enter valid numbers.");
        }
        rl.close();
    });
});
