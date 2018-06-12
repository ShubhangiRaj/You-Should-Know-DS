// Expected time complexity is O(n) and extra space is O(1).
function moveZeros(arr){
    // for(let i = 0; i < arr.length; i++){
    //     if(arr[i] == 0){
    //         for(var j = i+1; j < arr.length; j++){
    //             if(arr[j] !== 0){
    //                 break;
    //             }
    //         }
    //         if(j == arr.length){
    //             break;
    //         }
    //         // swap
    //         [arr[i], arr[j]] = [arr[j], arr[i]];
    //     }
    // }
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
    console.log(arr);
}
moveZeros([0, 0, 1, 2, 0, 0, 0, 0, 3, 6, 0, 0]);