function sumTriangle(arr){
    let sum; 
    let newArr = [];
    if(arr.length == 2){
        sum = arr[0] + arr[1];
        console.log(sum);
        return sum;
    }
    for(let i = 0; i < (arr.length - 1); i++){
        sum = arr[i] + arr[i+1];
        newArr.push(sum);
    }
    console.log(newArr);
    sumTriangle(newArr);
}
sumTriangle([4,7,3,6,7]);