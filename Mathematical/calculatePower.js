// with Math.pow()
function power1(a,b){
    console.log(Math.pow(a,b));
}
power1(5,2);

// without Math.pow()
function power2(a,b){
    let result = 1;
    while(b > 0){
        result *= a;
        b-- ;
    }
    console.log(result);
}
power2(5,4);

// using recursion
function power3(a,b){
    if(b !== 0){
        return (a * power3(a, b-1));
    } else {
        return 1;
    }
}
power3(5,2);