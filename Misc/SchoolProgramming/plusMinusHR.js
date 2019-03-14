function plusMinus(arr) {
    let negCount = 0;
    let posCount = 0;
    let zeroCount = 0;
    
    for(let i of arr){
        if(i == 0){
            zeroCount += 1;
        } else if(i < 0){
            negCount += 1;
        } else if(i > 0){
            posCount += 1;
        }
    }
    let positive = posCount / arr.length;
    let negative = negCount / arr.length;
    let zero     = zeroCount / arr.length;
    
    console.log(positive.toFixed(6));
    console.log(negative.toFixed(6));
    console.log(zero.toFixed(6));
}
plusMinus([-4, 3, -9, 0, 4, 1])