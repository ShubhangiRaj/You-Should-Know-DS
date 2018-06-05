function divisibleSumPairs(n, k, ar) {
    let count = 0;
    for(let i = 0; i < ar.length; i++){
        for(let j = i+1; j < ar.length; j++){
            let sum = ar[i] + ar[j];
            if(sum % k == 0){
                count += 1;
            }
        }
    }
    console.log(count);
}
divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])