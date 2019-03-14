function calculateMean(arr){
    let reducer = (accumulator , currentValue) => accumulator + currentValue;
    let sum = arr.reduce(reducer);
    let mean = sum / arr.length;
    console.log(Math.floor(mean));
}

calculateMean([90, 100, 78, 89, 67])