function factorial(num){
    if(num <= 1){
        return 1;
    }
    return num * factorial(num-1);
}

function permutation(n, r){
    let numerator = factorial(n);
    let denominator = factorial(n-r);
    let result = numerator / denominator;
    console.log(result);
}
permutation(10,4);