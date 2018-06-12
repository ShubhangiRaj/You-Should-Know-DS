function findPeakElem(arr){
    let peak = arr[0];
    for(let i = 1; i < arr.length-1; i++){
        if(arr[i] > arr[i-1] && arr[i] > arr[i+1] && arr[i] > peak){
            peak = arr[i];
        }
    }
    console.log(peak);
}
findPeakElem([10,20,15,2,23,90]);