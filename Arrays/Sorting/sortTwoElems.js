function sortTwoElems(arr){
    let hashMap = {};
    for(let i of arr){
        if(hashMap[i]){
            hashMap[i] += 1;
        }else{
            hashMap[i] = 1;
        }
    }
    console.log(hashMap);
    
    let resArr = [];
    while(hashMap[0] > 0){
        resArr.push(0);
        hashMap[0]--;
    }

    while(hashMap[1] > 0){
        resArr.push(1);
        hashMap[1]--;
    }
    console.log(resArr);
}
sortTwoElems([0, 1, 0, 1, 0, 0, 1, 1, 1, 0]);