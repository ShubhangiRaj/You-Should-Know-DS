// input: [[1,0,0],[8,-9,-1]],  output: -1

function sumArray(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum;
}

function sumMatrix(arr){
    let sumArr = [];
    for(let i = 0; i < arr.length; i++){
        let sum = sumArray(arr[i]);
        sumArr.push(sum);
    }
    console.log(sumArr);
    let result = sumArray(sumArr);
    console.log(result);
}

sumMatrix([[1,0,0],[8,-9,-1]]);