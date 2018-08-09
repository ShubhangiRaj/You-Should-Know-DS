// There is a given an array and split it from a specified position, and move the first part of array add to the end.

// Input : arr[] = {12, 10, 5, 6, 52, 36}
//             k = 2
// Output : arr[] = {5, 6, 52, 36, 12, 10}

function splitAndAdd(arr, k){
    while(k > 0){
        arr.push(arr.shift());
        k--
    }
    console.log(arr);
}
splitAndAdd([12, 10, 5, 6, 52, 36], 2)