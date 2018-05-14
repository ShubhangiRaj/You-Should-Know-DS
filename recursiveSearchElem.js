function searchElem(arr, elem){
    if(arr[0] == elem){
        return 1;
    }
    // for(let i = 0; i < arr.length; i++){
    //     if(arr[i] == elem){
    //         return 1
    //     } else {
    //         return -1;
    //     }
    // }
    searchElem(arr, elem);

}
searchElem([1,2,3,5,7,4], 3);