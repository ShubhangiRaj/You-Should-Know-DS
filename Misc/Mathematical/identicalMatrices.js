function checkIdenticalMatrices(arrA, arrB){
    if(arrA.length !== arrB.length){
        return false;
    }
    let len = arrA.length;
    for(let i = 0; i < len; i++){
        for(let j = 0; j < len; j++){
            if(arrA[i][j] !== arrB[i][j]){
                return false;
            }
        }
    }
    return true;
}

checkIdenticalMatrices([[1,1,1],[2,2,2],[3,3,3],[4,4,4]], [[1,1,1],[2,2,2],[3,3,3],[4,4,4]])