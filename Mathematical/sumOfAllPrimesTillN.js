function isPrime(num){
    for(let i = 2; i < num; i++){
        if(num % i == 0){
            return 0;
        }
    }
    return num;
}

function sumOfPrimes(num){
    let primeArray = [];
    let primeNum;
    for(let i = 2; i < num; i++){
        primeNum = isPrime(num);
        if(primeNum !== 0){
            primeArray.push(primeNum);
        }
    }
    let reducer = (accumulator , currentValue) => accumulator + currentValue;
    let sum = primeArray.reduce(reducer);

    console.log(sum);
}
sumOfPrimes(5);