function closeToZero(arr){
    // TODO
    let sortedArr = arr.sort(function(a,b){
        return a - b;
    });

    let minDiff = Infinity;
    let start = 0;
    let end = arr.length - 1;
    let temp1, temp2;

    while(start < end){
        let diff = 0 - (sortedArr[start] + sortedArr[end]);
        if(diff < minDiff){
            minDiff = diff;
            temp1 = sortedArr[start];
            temp2 = sortedArr[end];
        }
    }
    console.log(temp1, temp2);
}
closeToZero([1, 60, -10, 70, -80, 85]);