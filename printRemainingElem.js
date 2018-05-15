// Given a array of length N , at each step it is reduced by 1 element for eg. in the first step the maximum element would be removed , in  the second step minimum element of the remaining array would be removed , in the third step again the maximum and so on. 
// Continue this till the array contains only 1 element . And print that final element remaining in the array.

function printRemaining(arr){
    if(arr.length == 1){
        return arr[0]; 
    }
    // find max
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    let indexOfMax = arr.indexOf(max);
    arr.splice(indexOfMax, 1);

    //find min 
    let min = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    let indexOfMin = arr.indexOf(min);
    arr.splice(indexOfMin, 1);

    let remainingElem = printRemaining(arr);
    if(remainingElem){
        console.log(remainingElem);
    }
}

printRemaining([7, 8, 3, 4, 2, 9, 5])