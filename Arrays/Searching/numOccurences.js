function numOccurences(arr, x){
    let hashMap = {};
    for(let i = 0; i < arr.length; i++){
        if(hashMap[arr[i]]){
            hashMap[arr[i]] += 1;
        } else {
            hashMap[arr[i]] = 1;
        }
    }
    console.log(hashMap[x]);
}

numOccurences([1, 2, 2, 2, 2, 3, 4, 7 ,8 ,8], 2)