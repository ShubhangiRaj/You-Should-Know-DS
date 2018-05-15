// 4 2 1 5 3
// output: 2 1 -1 3 -1

function immediateSmaller(arr){
    let resultArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i+1] < arr[i]){
            resultArr.push(arr[i+1]);
        } else {
            resultArr.push(-1);
        }
    }
    return resultArr;
}
immediateSmaller([4, 2, 1, 5, 3])