function sort(arr){
    let count0 = 0;
    let count1 = 0;
    let count2 = 0;

    for(let i of arr){
        if(i == 0){
            count0 += 1;
        }
        if(i == 1){
            count1 += 1;
        } 
        if(i == 2){
            count2 += 1;
        }
    }
    // Putting the 0's at start.
    for(let i = 0; i < count0; i++){
        arr[i] = 0;
    } 
        
    // Putting the 1's in the array after the 0's.
    for(let i = count0; i < (count0 + count1); i++) {
        arr[i] = 1;
    }
    // Putting the 2's in the array after the 1's
    for(let i = count0 + count1; i < arr.length; i++){
        arr[i] = 2;
    }
     
    console.log(arr);
}
sort([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]);