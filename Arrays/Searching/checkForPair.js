// Write a C program that, given an array A[] of n numbers and another number x, 
// determines whether or not there exist two elements in S whose sum is exactly x.

function checkForPair(arr, sum){
    let hashMap = {};
    for(let a of arr){
        if(hashMap[a] !== true){
            hashMap[sum - a] = true;
        } else {
            console.log(sum - a, a);
            return true
        }
    }
    return false
}

checkForPair([1,4,45,6,1,-8], 16);