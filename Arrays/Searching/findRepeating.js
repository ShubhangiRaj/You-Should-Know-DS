// We are given an array arr[] of size n. Numbers are from 1 to (n-1) in random order. 
// The array has only one repetitive element. We need to find the repetitive element.

module.exports = function findRepeating(arr){
    let xor = arr[0];
    for(let i = 1; i < arr.length; i++){
        xor = arr[i] ^ xor;
    }
    // TODO
}