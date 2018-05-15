// [1,4,3], output: 2

function findMissing(arr){
    let sortedArr = arr.sort();
    for(let i = 0; i < arr.length - 1; i++){
        let temp = arr[i+1] - arr[i];
        if(temp !== 1){
            console.log(arr[i] + 1); 
        }
    }
}
findMissing([2,5,3,1]);