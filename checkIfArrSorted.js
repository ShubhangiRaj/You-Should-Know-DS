function checkSorted(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > arr[i+1]){
            return 0;
        } else {
            return 1;
        }
    }
}
checkSorted([90, 80, 100, 70, 40, 30])