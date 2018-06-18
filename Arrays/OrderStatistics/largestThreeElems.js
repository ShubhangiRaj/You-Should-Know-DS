// Given an array with all distinct elements, find the largest three elements. 
// Expected time complexity is O(n) and extra space is O(1).
// Input: arr[] = {10, 4, 3, 50, 23, 90}
// Output: 90, 50, 23

function maxThreeElems(arr){
    let firstMax = 0;
    let secondMax = 0;
    let thirdMax = 0;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > firstMax){
            thirdMax = secondMax;
            secondMax = firstMax;
            firstMax = arr[i];
        } else if(arr[i] > secondMax){
            thirdMax = secondMax;
            secondMax = arr[i];
        } else if(arr[i] > thirdMax){
            thirdMax = arr[i];
        }
    }
    console.log(firstMax, secondMax, thirdMax);
}
maxThreeElems([10, 4, 3, 50, 23, 90, 101]);

// Complexity O(n) 