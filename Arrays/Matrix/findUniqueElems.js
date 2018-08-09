function findUniqueElems(arr){
    let hashMap = {};
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            if(hashMap[arr[i][j]]){
                hashMap[arr[i][j]] += 1;
            } else {
                hashMap[arr[i][j]] = 1;
            }
        }
    }
    console.log(hashMap);
    for(let i in hashMap){
        if(hashMap[i] == 1){
            console.log(i);
        }
    }
}
findUniqueElems([[20,  15,  30,  2], [2,   3,   5,   30], [6,   7,   6,   8]])