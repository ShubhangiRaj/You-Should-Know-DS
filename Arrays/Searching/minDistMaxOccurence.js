function minDist(arr){
    let maxNum = 0;

    for(let i of arr){
        if(i > maxNum){
            maxNum = i;
        }
    }

    let indexes = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == maxNum){
            indexes.push(i);
        }
    }
    // TODO
}
minDist([3,5,2,3,5,3,5]);