function sumOfElems(arr){
    let sum = 0; 
    for(let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    console.log(sum);
}
sumOfElems([1,2,3,4,5]);