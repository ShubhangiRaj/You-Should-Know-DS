// Expected time complexity is O(n) and extra space is O(1).
function moveZeros(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 0){
            for(var j = i+1; j < arr.length; j++){
                if(arr[j] !== 0){
                    break;
                }
            }
            if(j == arr.length){
                break;
            }
            // swap
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    console.log(arr);
}
moveZeros([1, 2, 0, 0, 0, 3, 6]);