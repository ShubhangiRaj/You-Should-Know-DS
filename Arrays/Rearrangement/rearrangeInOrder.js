function rearrange(arr){
    let sortedArr = arr.sort();

    let left = 0;
    let right = arr.length - 1;
    let resultArr = [];

    while(left < right){
        resultArr.push(arr[left]);
        resultArr.push(arr[right]);
        left++;
        right--;
    }
    if(arr.length % 2 !== 0){
        resultArr.push(arr[left]);
    }
    console.log(resultArr);
}
rearrange([5, 8, 1, 4, 2, 9, 3, 7, 6]);

// Complexity: O(nlogn);