function waveForm(arr){
    // first sort the arr
    let sortedArr = arr.sort();

    // swap adjacent elements
    for(let i = 0; i < arr.length; i += 2){
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
    }

    console.log(arr);
}
waveForm([10, 5, 6, 3, 2, 20, 100, 80]);