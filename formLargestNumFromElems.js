// [9, 0, 1, 3, 0] output 93100

function findMax(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return(max);
}

function largestNum(arr){
    let resultArr = [];
    let max = 0;
    // find max num in arr and push in resultArr
    while(arr.length !== 0){
        max = findMax(arr);
        resultArr.push(max);
        let indexOfMax = arr.indexOf(max);
        arr.splice(indexOfMax, 1);
    }
    console.log(resultArr);
    console.log(parseInt(resultArr.join("")));
}

largestNum([9, 0, 1, 3, 0]);