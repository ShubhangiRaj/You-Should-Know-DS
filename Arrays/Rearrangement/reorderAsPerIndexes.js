// Given two integer arrays of same size, “arr[]” and “index[]”, 
// reorder elements in “arr[]” according to given index array.
// Input:  arr[]   = [50, 40, 70, 60, 90]
//         index[] = [3,  0,  4,  1,  2]
// Output: arr[]   = [40, 60, 90, 50, 70]
//         index[] = [0,  1,  2,  3,   4]

function reorderAsPerIndexes(arr, indexArr){
    for(let i = 0; i < arr.length - 2; i++){
        if(indexArr[i] !== i){
            [arr[i], arr[indexArr[i]]] = [arr[indexArr[i]], arr[i]];
        }
    }
    console.log(arr);
}
reorderAsPerIndexes([10, 11, 12], [1,0,2]);

// TODO