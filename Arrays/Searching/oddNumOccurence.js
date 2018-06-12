function oddOccurence(arr){
    let xor = arr[0];

    for(let i = 1; i < arr.length; i++){
        xor = xor ^ arr[i];
    }

    console.log(xor);
}
oddOccurence([2, 3, 5, 4, 5, 2, 4, 3, 5, 2, 4, 4, 2]);