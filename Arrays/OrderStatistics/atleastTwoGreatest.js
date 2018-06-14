// Find all elements in array which have at-least two greater elements
// Given an array of n distinct elements, the task is to find all elements in array 
// which have at-least two greater elements than themselves.
// Input : arr[] = {2, 8, 7, 1, 5};
// Output : 2  1  5  
// The output three elements have two or more greater elements

function atleastTwoGreatest(arr){
    // sort the arr
    let sortedArr = arr.sort(function(a,b){
        return a - b;
    });
    // return all elements except the last two elems 
    for(let i = 0; i < sortedArr.length - 2; i++){
        console.log(sortedArr[i]);
    }
}
atleastTwoGreatest([7, -2, 3, 4, 9, -1]);

// complexity O(nlogn)