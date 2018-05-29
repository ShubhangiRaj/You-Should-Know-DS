// Given an array of integers. All numbers occur twice except one number which occurs once. 
// Find the number in O(n) time & constant extra space.

module.exports = function occursOnce(arr){
    let xor = arr[0];
    for(let i = 1; i < arr.length; i++){
        xor = arr[i] ^ xor;
    }
    console.log(xor);
}