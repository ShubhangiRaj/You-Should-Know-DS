function possibleTriangles(arr){
    let sortedArr = arr.sort();
    let resultArr = [];
    let count = 0;
    for(let i = 0; i < sortedArr.length - 1; i++){
        for(let j = i+1; j < sortedArr.length - 1; j++){
            if((arr[i] + arr[j]) > arr[j+1]){
                resultArr.push([arr[i], arr[j], arr[j+1]]);
                count++; 
            }
        }
    }
    console.log(resultArr);
    console.log(count);
}
possibleTriangles([10,21,22,100, 101, 200, 300])

// TODO 

// complexity O(n^2)