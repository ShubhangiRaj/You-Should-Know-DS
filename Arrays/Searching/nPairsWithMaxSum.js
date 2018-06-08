function nPairs(arr){
    let maxSum = 0;
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            // if(i < j){
            //     if(arr[i] + arr[j] > maxSum){
            //         maxSum = arr[i] + arr[j];
            //     }
            //     if(arr[i] + arr[j] == maxSum){
            //         count += 1;
            //     }
                
            // }
            if(arr[i] + arr[j] > maxSum){
                maxSum = arr[i] + arr[j];
            }
        }
    }
    console.log(maxSum);

    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(i < j){
                if(arr[i] + arr[j] == maxSum){
                    count += 1;
                }
            }
        }
    }

    console.log(count);
}
nPairs([1,1,1,2,2,2])