function birthdayCakeCandles(ar) {
    // arr = [3,2,1,3]
    // find the max num in the array
    // find the occurence of max num
    let sortArr = ar.sort();
    let maxNum = sortArr[ar.length-1];
    let resArr = ar.filter(elem => elem == maxNum);
    console.log(resArr.length);
}
birthdayCakeCandles([18, 90, 90, 13, 90, 75, 90, 8, 90, 43]);