// Given two integer arrays of same size, “arr[]” and “index[]”, 
// reorder elements in “arr[]” according to given index array.
// Input:  arr[]   = [50, 40, 70, 60, 90]
//         index[] = [3,  0,  4,  1,  2]
// Output: arr[]   = [40, 60, 90, 50, 70]
//         index[] = [0,  1,  2,  3,   4]

function reorderAsPerIndexes(arr, indexArr){
    
    // let tempIndex = indexArr[[indexArr[0]]];
    // let value = arr[indexArr[0]];

    for(let i = 0; i < arr.length; i++){
        if(indexArr[i] !== i){
            [arr[i], arr[indexArr[i]]] = [arr[indexArr[i]], arr[i]];
            let temp = indexArr[i]; // 3
            indexArr[i] = indexArr[temp] // 1
            indexArr[temp] = temp;
        }
    }
    console.log(arr);
}
reorderAsPerIndexes([50, 40, 70, 60, 90, 10], [3,  0,  4,  1,  5, 2]);
