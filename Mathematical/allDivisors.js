function allDivisors(num){
    for(let i = 1; i <= num; i++){
        if((num % i) == 0){
            console.log(i);
        } else {
            continue;
        }
    }
}
allDivisors(89384);