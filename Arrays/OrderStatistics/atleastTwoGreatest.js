// Find all elements in array which have at-least two greater elements
// Given an array of n distinct elements, the task is to find all elements in array 
// which have at-least two greater elements than themselves.
// Input : arr[] = {2, 8, 7, 1, 5};
// Output : 2  1  5  
// The output three elements have two or more greater elements

// function atleastTwoGreatest(arr){
//     // sort the arr
//     let sortedArr = arr.sort(function(a,b){
//         return a - b;
//     });
//     // return all elements except the last two elems 
//     for(let i = 0; i < sortedArr.length - 2; i++){
//         console.log(sortedArr[i]);
//     }
// }
// atleastTwoGreatest([2,8,7,1,5]);

// complexity O(nlogn)

function atleastTwoGreatest(arr){
    // find the second largest elem and print all elems lesser or equal to it.
    let max = 0; 
    let secondMax = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            secondMax = max;
            max = arr[i];
        }
        else if(arr[i] > secondMax){
            secondMax = arr[i];
        }
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < secondMax){
            console.log(arr[i]);
        }
    }
}
atleastTwoGreatest([2,8,7,1,5]);

// Complexity O(n)