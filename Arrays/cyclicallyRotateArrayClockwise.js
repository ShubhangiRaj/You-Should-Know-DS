function cyclicallyRotate(arr, d){
    while(d > 0){
        arr.unshift(arr.pop());
        d--
    }
    console.log(arr);
}
cyclicallyRotate([1,2,3,4,5], 2)