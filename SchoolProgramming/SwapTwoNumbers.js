// using temp variable
// function swapTwoNumbers(a,b){
//     console.log("a:" + a);
//     console.log("b:" + b);
//     let temp = a;
//     a = b;
//     b = temp;
//     console.log("After swap a: " + a);
//     console.log("b:" + b);
// }

// swapTwoNumbers(2,3);

// function swapTwoNumbers(a,b){
//     console.log("a:" + a);
//     console.log("b:" + b);
//     [a,b] = [b,a];
//     console.log("After swap a: " + a);
//     console.log("b:" + b);
// }
// swapTwoNumbers(4,6);

function swapTwoNumbers(a,b){
    console.log("a:" + a);
    console.log("b:" + b);
    // let diff = (a > b) ? (a - b) : (b - a);
    if(b > a){
        diff = b - a;
        b = b - diff;
        a = diff + a;
    } else {
        diff = a - b;
        b = diff + b;
        a = a - diff;
    }
    console.log("After swap a: " + a);
    console.log("b:" + b);
}
swapTwoNumbers(4,6);

function swapTwoNumbers(a,b){
    console.log("a:" + a);
    console.log("b:" + b);
    b = b + a;
    a = b - a;
    b = b - a;
    console.log("After swap a: " + a);
    console.log("b:" + b);
}
swapTwoNumbers(4,6);