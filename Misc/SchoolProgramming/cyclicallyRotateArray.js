// cyclically rotate array by one
function cyclicallyRotate(arr, rotateBy){
    console.log(arr);
    while(rotateBy > 0){
        arr.unshift(arr.pop());
        rotateBy-- ;
    }
    console.log("After rotation " +  arr);
}
cyclicallyRotate([1,2,3,4,5], 2);