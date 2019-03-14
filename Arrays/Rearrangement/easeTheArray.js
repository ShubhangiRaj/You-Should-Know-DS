// Input : arr[] = {2, 2, 0, 4, 0, 8}
// Output : 4 4 8 0 0 0

// Input : arr[] = {0, 2, 2, 2, 0, 6, 6, 0, 0, 8}
// Output :  4 2 12 8 0 0 0 0 0 0

function easeTheArr(arr){
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i+1] !== 0 && arr[i+1] == arr[i]){
            arr[i] = arr[i] * 2;
            arr[i+1] = 0;
        }
    }
    moveZerosToEnd(arr);
    console.log(arr);
}
easeTheArr([0, 2, 2, 2, 0, 6, 6, 0, 0, 8]);

function moveZerosToEnd(arr){
    for(let i = 0; i < arr.length - 1; i++){
        if()
    }
    return arr;
}

// TODO