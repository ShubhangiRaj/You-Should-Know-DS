// Given an array of n distinct elements, find the minimum number of swaps required to sort the array.
// Input : {4, 3, 2, 1}  Input : {1, 5, 4, 3, 2}
// Output : 2            Output : 2

function minSwaps(arr){
    // maintain 2 pointers
    let left = 0;
    let right = arr.length - 1;
    let swaps = 0;
    while(left < right){
        if(arr[left] == right + 1 && arr[right] == left + 1){
            swaps += 1;
            left++;
            right--;
        }else if(arr[left] == left + 1){
            left++;
        }else if(arr[right] == right + 1){
            right--; 
        }
    }
    console.log(swaps);
}
minSwaps([1, 5, 4, 3, 2]);

// complexity?? O(n)
// TODO