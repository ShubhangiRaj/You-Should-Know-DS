function missingNum(arr){
    let xor1 = arr[0];
    for(let i = 1; i < arr.length; i++){
        xor1 = xor1 ^ arr[i];
    }
    let xor2 = 1;
    for(let i = 2; i <= arr.length + 1; i++){
        xor2 = xor2 ^ i;
    }
    let missingNum = xor1 ^ xor2;

    console.log(missingNum);
}
missingNum([1,2,4,6,3,7,8])