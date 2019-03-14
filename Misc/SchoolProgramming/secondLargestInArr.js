// largest num in array
function findMax(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    console.log(max);
}
findMax([13,12,15,5,4,20, -2, 200, 0, 1,3,6]);

// second largest num 
function secondMax(arr){
    let max, secondMax = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
            
        }
    }
}