// Given a sorted array and a value x, the ceiling of x is the smallest element 
// in array greater than or equal to x, and the floor is the greatest element smaller than or equal to x. 
// Assume than the array is sorted in non-decreasing order. 
// Write efficient functions to find floor and ceiling of x.

module.exports = function findCeiling(arr, x){
    let ceil = 0;
    let floor = 0;
    for(let el of arr){
        if(el <= x){
            ceil = el;
            
        } else {
            console.log(`ceiling not found`);
        }
    }
    for(let el of arr){
        if(el >= x){
            floor = el;
            
        } else {
            console.log(`floor not found`);
        }
    }
    console.log(`Ceil = ${ceil}, Floor = ${floor}`);
}
// findCeiling([1, 2, 8, 10, 10, 12, 19], 5);