// Given an array of integers, update every element with multiplication of previous and next elements with following exceptions. 
// Input: arr[] = {2, 3, 4, 5, 6}, length: 5
// Output: arr[] = {6, 8, 15, 24, 30}, length: 5

// We get the above output using following
// arr[] = {2*3, 2*4, 3*5, 4*6, 5*6} 

function replace(arr){
    let resArr = [];
    if(arr.length > 2){
        resArr.push(arr[0] * arr[1]);
    }
    for(let i = 1; i < arr.length - 1; i++){
        resArr.push(arr[i-1] * arr[i+1]);
    }
    resArr.push(arr[arr.length - 1] * arr[arr.length - 2]);
    console.log(resArr);
}
replace([2,3,4,5,6])