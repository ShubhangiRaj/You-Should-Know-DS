function closestSum(arr, sum){
    // initialize result pair
    let res_1, res_2;
    // initialize diff
    let diff = Infinity;
    // initialize left and right indexes
    let left = 0;
    let right = arr.length - 1;

    while(right > left){
        if(Math.abs(arr[left] + arr[right] - sum) < diff){
            diff = Math.abs(arr[left] + arr[right] - sum);
            res_1 = left;
            res_2 = right;
        } 
        if(arr[left] + arr[right] > sum){
            right--;
        } else {
            left++;
        }
    }
    console.log(arr[res_1] + " " + arr[res_2]);
}
closestSum([10, 22, 28, 29, 30, 40], 54);

// complexity: O(n);