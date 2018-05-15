// 1 0 1 1 0
// output: 0 0 1 1 1

function binaryArraySort(arr){
    let zeroArr = [];
    let oneArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 0){
            zeroArr.push(arr[i]);
        } else {
            oneArr.push(arr[i]);
        }
    }
    return zeroArr.concat(oneArr);
}

binaryArraySort([0,1,1,0,0,1,0,1]);