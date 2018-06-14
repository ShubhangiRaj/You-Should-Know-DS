function kthSmallest(arr, k){
    // let smallestNum = arr[0];
    // for(let i = 1; i < arr.length; i++){
    //     if(arr[i] <= smallestNum){
    //         smallestNum = arr[i];
    //     }
    // }
    // console.log(smallestNum);

    
    let sortedArr = arr.sort(function(a, b) {
        return a - b;
    });

    console.log(sortedArr[k - 1]);
}
kthSmallest([7, 10, 4, 3, 20, 15], 3);

// Complexity: O(nlogn)
// TODO