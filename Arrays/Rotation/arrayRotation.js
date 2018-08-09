function rotateArr(arr, d){
    while(d > 0){
        arr.push(arr.shift());
        d--
    }
    console.log(arr);
}
rotateArr([1, 2, 3, 4, 5, 6, 7], 2)