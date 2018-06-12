function separateOddEven(arr){
    // find first position of first odd number
    let oddNumIndex = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            oddNumIndex = i;
            break;
        }
    }
    if(oddNumIndex !== arr.length - 1){
        for(let i = oddNumIndex; i < arr.length; i++){
            for(let j = i + 1; j < arr.length; j++){
                if(arr[j] % 2 == 0){
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                    break; // go to outer loop and do i++
                }
            }
        }
    }
    console.log(arr);
}
separateOddEven([2,4,5,6,7,8,9,3,10]);

// Complexity ?? 