// Given an array of integers of size n. Assume ‘0’ as invalid number and all other as valid number. 
// Convert the array in such a way that if next valid number is same as current number, 
// double its value and replace the next number with 0. After the modification, 
// rearrange the array such that all 0’s are shifted to the end.
// Input : arr[] = {2, 2, 0, 4, 0, 8}
// Output : 4 4 8 0 0 0

function doubleFirst(arr){
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] == 0){
            continue;
        }else if(arr[i] !== 0 && arr[i] == arr[i+1]){
            arr[i] = arr[i] * 2;
            arr[i+1] = 0;
        }
    }
    console.log(moveZerosToEnd(arr));
}
function moveZerosToEnd(arr){
    let left = 0;
    let right = arr.length - 1;

    while(left < right){
        if(arr[left] == 0 && arr[right] !== 0){
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++; 
            right--;
        } 
        if(arr[left] !== 0){
            left++;
        } 
        if(arr[right] == 0){
            right--;
        }
    }
    return arr;
}
doubleFirst([2, 2, 0, 4, 0, 8]);

// Complexity: O(n) ??