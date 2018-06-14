function mean(arr){
    let sum = 0;
    for(let i of arr){
        sum += i;
    }
    let mean = sum / arr.length;
    console.log(mean);
}
function median(arr){
    let sortedArr = arr.sort(function(a,b){
        return a - b;
    });
    // odd length
    if(arr.length % 2 !== 0){
        console.log(arr[Math.floor(arr.length/2)]);
    }
    // even length
    if(arr.length % 2 == 0){
        let half = arr.length / 2;
        let median = (arr[half] + arr[half-1]) / 2;
        console.log(median);
    }
}

mean([1, 3, 4, 2, 6, 5, 8, 7]);
median([1, 3, 4, 2, 6, 5, 8, 7]);