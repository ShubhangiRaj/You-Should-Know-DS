function mulOfElems(arr){
    let mul = 1; 
    for(let i = 0; i < arr.length; i++){
        mul = mul * arr[i];
    }
    console.log(mul);
}
mulOfElems([1,2,3,4,5]);