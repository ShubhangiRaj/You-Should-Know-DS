function moneySpent(budget, keyboards, drives){
    let sumArr = [];
    let diff;
    for(let i = 0; i < keyboards.length; i++){
        for(let j = 0; j < drives.length; j++){
            let sum = keyboards[i] + drives[j];
            if(sum == budget){
                console.log(budget);
            } else if(sum < budget){
                sumArr.push(sum);
            }
        }
    }
    console.log(sumArr);
    sumArr.sort();
    console.log(sumArr[sumArr.length - 1]);
}
moneySpent(10, [3,1], [5,2,8]);