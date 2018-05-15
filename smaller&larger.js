// Given a sorted array and a value x, find the number of array elements less than or equal to x and elements more than or equal to x. 

function numberOfSmallerAndLarger(arr, num){
    let smallNumCount = 0;
    let largeNumCount = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] <= num){
            smallNumCount++;
        }else if(arr[i] >= num){
            largeNumCount++;
        }
    }
    console.log(largeNumCount + " " + smallNumCount);
}
numberOfSmallerAndLarger([1, 2, 8, 10, 11, 12, 19], 10);